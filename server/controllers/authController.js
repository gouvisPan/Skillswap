const { promisify } = require("util");

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);
  res.status(statusCode).json({
    token,
    data: {
      user,
    },
  });
};

exports.signUp = asyncHandler(async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    changedPasswordAt: req.body.changedPasswordAt,
  });

  sendToken(user, 201, res);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("Please insert email and password", 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Incorrect password or email", 401));

  sendToken(user, 200, res);
});

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new AppError("No User found for this e-mail", 404));

  const resetToken = user.createPWDResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Seems like you forfot your passwrod!! Follow this link in order to reset your password: ${resetURL}.
                  If thats not thecase please ignore this email.`;

  try {
    await sendEmail({
      email: user.email,
      subjectL: "Password Reset (Valid for 10 minutes)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token send via email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new AppError("Password reset failed, please try again", 500));
  }
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const encryptedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: encryptedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) return next(new AppError("Token expired! Please try again", 400));

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  sendToken(user, 200, res);
});

exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("WRONG PASSWORD"));
  }

  user.password = req.body.password;

  await user.save();

  sendToken(user, 200, res);
});

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new AppError("NOT Authorized!!! ", 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  const tmpUser = await User.findById(decoded.id);

  if (!tmpUser) return next(new AppError("User no longer exists!"));

  if (tmpUser.changedPasswordAfter(decoded.iat))
    return next(new AppError("Password changed! Login again", 401));

  req.user = tmpUser;
  next();
});

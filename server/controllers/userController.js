const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.getAllUsers -
  asyncHandler(async (req, res) => {
    const allUsers = await User.find();
  });

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password < 6) {
    res.status(400);
    throw new Error("Password must be more than 6 characters");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email has already been used");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(user._id);

  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, bio, email, photo, password } = user;
    res.status(201).json({
      _id,
      name,
      email,
      bio,
      photo,
      token,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

exports.logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
  });
  res.status(200).json({
    message: "Logged out successfuly!",
  });
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Insufficient info");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Wrong Email!!");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (passwordIsCorrect) {
    const token = generateToken(user._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      sameSite: "none",
    });

    const { _id, name, email, bio, photo, password } = user;
    res.status(200).json({
      _id,
      name,
      email,
      bio,
      photo,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Password");
  }
});

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const filteredObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) filteredObj[el] = obj[el];
  });
  return filteredObj;
};

exports.getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();

  res.status(200).json({
    message: "Users Fetched!",
    data: {
      allUsers,
    },
  });
});

exports.deleteMe = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    message: "User deleted successfully",
    data: null,
  });
});

exports.updateMe = asyncHandler(async (req, res, next) => {
  if (req.body.password)
    return next(new AppError("This route can't be used for PW uppdate"), 400);

  const filteredBody = filterObj(
    req.body,
    "email",
    "name",
    "bio",
    "slogan",
    "photo",
    "mentorships",
    "skills"
  );

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  console.log(updatedUser);
  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: {
      updatedUser,
    },
  });
});

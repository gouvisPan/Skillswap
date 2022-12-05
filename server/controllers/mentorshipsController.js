const asyncHandler = require("express-async-handler");
const Mentorship = require("../models/mentorshipModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const User = require("../models/userModel");

exports.createMentorship = asyncHandler(async (req, res, next) => {
  const mentorship = await Mentorship.create(req.body);

  res.status(201).json({
    message: "Mentorship created successfully!",
    data: {
      mentorship,
    },
    status: "success",
  });
});

exports.getUserMentorships = asyncHandler(async (req, res, next) => {
  const userMentorships = await Mentorship.find({
    mentorID: req.params.id,
  });

  if (!userMentorships)
    return next(new AppError("No mentorships found for this user"));

  res.status(200).json({
    status: "success",
    message: "All mentorships fetched",
    data: {
      userMentorships,
    },
  });
});

exports.getMentorship = asyncHandler(async (req, res, next) => {
  const mentorship = await Mentorship.findById(req.params.id).populate(
    "messages"
  );

  if (!mentorship) return next(new AppError("No mentorship by this ID found!"));

  res.status(200).json({
    message: "Fetched a mentorship",
    status: "success",
    data: {
      mentorship,
    },
  });
});

exports.updateMentorship = asyncHandler(async (req, res, next) => {
  const mentorship = await Mentorship.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!mentorship) return next(new AppError("No mentorship by this ID found!"));

  res.status(200).json({
    message: "Mentorship updated!",
    status: "success",
    data: {
      mentorship,
    },
  });
});
exports.deleteMentorship = asyncHandler(async (req, res, next) => {
  await Mentorship.findByIdAndDelete(req.params.id);

  res.status(204).json({
    message: "Mentorship Deleted!",
    status: "success",
  });
});

exports.getAllMentorships = asyncHandler(async (req, res, next) => {
  const features = new APIFeatures(Mentorship.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const allMentorships = await features.query;

  if (!allMentorships)
    return next(new AppError("Problem with fetching the mentorships"));

  res.status(200).json({
    status: "success",
    message: "All mentorships fetched",
    data: allMentorships,
  });
});

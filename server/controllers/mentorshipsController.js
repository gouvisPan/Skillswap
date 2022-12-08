const asyncHandler = require("express-async-handler");
const Mentorship = require("../models/mentorshipModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const factory = require("./handlerFactory");

exports.createMentorship = factory.createOne(Mentorship);
exports.getMentorship = factory.getOne(Mentorship, "messages");
exports.getAllMentorships = factory.getAll(Mentorship);
exports.updateMentorship = factory.updateOne(Mentorship);
exports.deleteMentorship = factory.deleteOne(Mentorship);

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

const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const AppError = require("../utils/appError");

exports.getAll = asyncHandler(async (req, res, next) => {
  const messages = await Message.find({ mentorship: req.body.mentorshipId });

  if (!messages) return next(new AppError("No messages found!"));

  res.status(200).json({
    message: "Messages fetched successfully!",
    data: {
      messages,
    },
  });
});

exports.create = asyncHandler(async (req, res, next) => {
  if (!req.body.mentorshipId) req.body.mentorshipId = req.params.mentorshipId;

  const newMessage = await Message.create({
    text: req.body.text,
    mentor: req.body.mentor,
    mentorship: req.body.mentorshipId,
  });

  if (!newMessage)
    return next(new AppError("Message not send! Please try again"));

  res.status(200).json({
    message: "Message sent!",
    data: {
      newMessage,
    },
  });
});
exports.delete = asyncHandler(async (req, res, next) => {});

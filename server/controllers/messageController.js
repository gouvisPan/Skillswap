const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.setMentorshipId = asyncHandler(async (req, res, next) => {
  if (!req.body.mentorshipId) req.body.mentorshipId = req.params.mentorshipId;
  next();
});

exports.getAll = factory.getAll(Message);
exports.createMessage = factory.createOne(Message);
exports.deleteMessage = factory.deleteOne(Message);

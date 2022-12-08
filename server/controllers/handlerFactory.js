const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc)
      return next(new AppError("No document found for the provided ID!"), 404);

    res.status(204).json({
      message: "Document Deleted!",
      status: "success",
    });
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.create(req.body);

    res.status(201).json({
      message: "Document created successfully!",
      data: {
        data: document,
      },
      status: "success",
    });
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!document) return next(new AppError("No document by this ID found!"));

    res.status(200).json({
      message: "document updated!",
      status: "success",
      data: document,
    });
  });

exports.getOne = (Model, popOptions) =>
  asyncHandler(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const document = await query;

    if (!document) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: document,
      },
    });
  });

exports.getAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    let filter = {};
    if (req.params.mentorshipId)
      filter = { mentorshipId: req.params.mentorshipId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const document = await features.query;

    if (!document) return next(new AppError("Problem with fetching documents"));

    res.status(200).json({
      status: "success",
      results: document.length,
      data: {
        data: document,
      },
    });
  });

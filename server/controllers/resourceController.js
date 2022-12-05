const asyncHandler = require("express-async-handler");
const Resource = require("../models/resourceModel");
const AppError = require("../utils/appError");

exports.getAllResources = asyncHandler(async (req, res, next) => {
  const allResources = await Resource.find(req.body);

  if (!allResources)
    return next(
      new AppError("Problem with fetching resources, please try again...")
    );

  res.status(200).json({
    status: "success",
    message: "Resources fetched successfully",
    data: {
      allResources,
    },
  });
});

exports.getResource = asyncHandler(async (req, res, next) => {
  const resource = await Resource.findById(req.body.id);
});

exports.updateResource = asyncHandler(async (req, res, next) => {});

exports.createResource = asyncHandler(async (req, res, next) => {
  const newResource = await Resource.create(req.body);

  if (!newResource)
    return next(
      new AppError("Problem with Resource creation, please try again")
    );

  res.status(200).json({
    status: "success",
    message: "Resource created successfully",
    data: {
      newResource,
    },
  });
});

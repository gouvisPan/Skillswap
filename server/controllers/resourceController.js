const asyncHandler = require("express-async-handler");
const Resource = require("../models/resourceModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.createResource = factory.createOne(Resource);
exports.getResource = factory.getOne(Resource);
exports.getAllResources = factory.getAll(Resource);
exports.updateResource = factory.updateOne(Resource);
exports.deleteResource = factory.deleteOne(Resource);

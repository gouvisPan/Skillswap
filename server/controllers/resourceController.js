const Resource = require("../models/resourceModel");
const factory = require("./handlerFactory");

exports.createResource = factory.createOne(Resource);
exports.getResource = factory.getOne(Resource);
exports.getAllResources = factory.getAll(Resource);
exports.updateResource = factory.updateOne(Resource);
exports.deleteResource = factory.deleteOne(Resource);

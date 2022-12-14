const Task = require("../models/resourceModel");
const factory = require("./handlerFactory");

exports.createTask = factory.createOne(Task);
exports.getTask = factory.getOne(Task);
exports.getAllTasks = factory.getAll(Task);
exports.updateTask = factory.updateOne(Task);
exports.deleteTask = factory.deleteOne(Task);

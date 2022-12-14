const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "To Do",
  },
  description: {
    type: String,
    required: [true, "Please Provide a description for the Task"],
  },
  done: {
    type: Boolean,
    default: false,
  },
  minTime: Number,
  maxTime: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

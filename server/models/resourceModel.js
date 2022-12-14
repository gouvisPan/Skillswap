const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  link: {
    type: String,
    required: [true, "Please provide the resource hyperlink"],
  },
  description: {
    type: String,
    default: "A usefull link",
  },
  useFor: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;

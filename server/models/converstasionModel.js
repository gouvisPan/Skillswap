const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    startedAt: Date,
    lastMessageTime: Date,
    messages: [],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;

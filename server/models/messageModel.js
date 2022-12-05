const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    readAt: Date,
    text: {
      type: String,
      required: [true, "A message can not be blank!"],
    },
    mentor: {
      type: Boolean,
      required: true,
    },
    mentorship: {
      type: mongoose.Schema.ObjectId,
      ref: "Mentorship",
      required: [true, "A message must belong to a mentorship!"],
    },
  },
  { timestamps: true }
);

// messageSchema.pre(/^find/, async function () {
//   this.populate("mentorship");
// });

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

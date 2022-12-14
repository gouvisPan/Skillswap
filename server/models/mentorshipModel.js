const mongoose = require("mongoose");

const mentorshipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please insert a name"],
    },
    sp: {
      type: String,
      required: [true, "Please insert SP"],
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dwuwvessm/image/upload/v1669462613/mentorship-default_gdynjs.png",
    },
    ment: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    progress: {
      type: Number,
      default: 0,
    },
    description: String,
    resources: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Resource",
      },
    ],
    tasks: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

mentorshipSchema.virtual("messages", {
  ref: "Message",
  foreignField: "mentorship",
  localField: "_id",
});

mentorshipSchema.pre(/^find/, async function () {
  this.populate("resources")
    .populate("tasks")
    .populate("messages")
    .populate("ment", "name");
});

const Mentorship = mongoose.model("Mentorship", mentorshipSchema);
module.exports = Mentorship;

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
    mentorID: {
      type: String,
      required: [true, "Please insert MentorID"],
    },
    menteeID: {
      type: String,
      required: [true, "Please insert MentorID"],
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dwuwvessm/image/upload/v1669462613/mentorship-default_gdynjs.png",
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Mentorship = mongoose.model("Mentorship", mentorshipSchema);
module.exports = Mentorship;

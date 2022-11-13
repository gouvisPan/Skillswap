const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please insert a name"],
    },
    email: {
      type: String,
      reqired: [true, "Please insert an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid e-mail",
      ],
    },
    password: {
      type: String,
      required: [true, "Please insert a password"],
      minLength: [6, "Password must be 6 characters or more"],
      //   maxLength: [23, "Password mus be up to 23 characters"],
    },
    photo: {
      type: String,
      required: [true, "Photo is missing"],
      default:
        "https://res.cloudinary.com/dwuwvessm/image/upload/v1668352589/roger-berry-avatar.png",
    },
    bio: {
      type: String,
      minLength: 20,
      maxLength: [350, "Bio must be under 350 characters"],
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcryptjs.genSalt(10);

  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;

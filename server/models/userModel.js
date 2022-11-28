const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

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
      select: false,
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
    changedPasswordAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Number,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.changedPasswordAt = Date.now() - 1000;

  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcryptjs.genSalt(10);

  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcryptjs.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTtimestamp) {
  if (this.changedPasswordAt) {
    const changedTimestamp = this.changedPasswordAt.getTime() / 1000;
    return JWTtimestamp < changedTimestamp;
  }
  return false;
};

userSchema.methods.createPWDResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 60000;
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;

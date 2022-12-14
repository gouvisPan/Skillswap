const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: String,
  sp: Number,
  desc: String,
  experience: {
    info: String,
    years: Number,
  },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;

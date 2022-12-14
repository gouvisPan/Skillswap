const Skill = require("../models/skillModel");
const factory = require("./handlerFactory");

exports.createSkill = factory.createOne(Skill);
exports.getSkill = factory.getOne(Skill);
exports.getAllSkills = factory.getAll(Skill);
exports.updateSkill = factory.updateOne(Skill);
exports.deleteSkill = factory.deleteOne(Skill);

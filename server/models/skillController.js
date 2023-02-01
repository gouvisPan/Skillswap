const Skill = require("./skillModel");
const factory = require("../controllers/handlerFactory");

exports.createSkill = factory.createOne(Skill, "skill");
exports.getSkill = factory.getOne(Skill);
exports.getAllSkills = factory.getAll(Skill);
exports.updateSkill = factory.updateOne(Skill);
exports.deleteSkill = factory.deleteOne(Skill, "skill");

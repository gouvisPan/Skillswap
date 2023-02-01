const express = require("express");
const skillController = require("../models/skillController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(authController.protect, skillController.getAllSkills);
router
  .route("/skill")
  .post(authController.protect, skillController.createSkill)
  .patch(authController.protect, skillController.updateSkill);

router
  .route("/:id")
  .get(authController.protect, skillController.getSkill)
  .post(authController.protect, skillController.createSkill)
  .patch(authController.protect, skillController.updateSkill)
  .delete(authController.protect, skillController.deleteSkill);

module.exports = router;

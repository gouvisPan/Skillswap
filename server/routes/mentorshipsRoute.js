const express = require("express");
const mentorshipController = require("../controllers/mentorshipsController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .post(mentorshipController.createMentorship)
  .get(mentorshipController.getAllMentorships);
//   .get(mentorshipController.getMentorship);

router.route("/all/:id").get(mentorshipController.getUserMentorships);

router
  .route("/single/:id")
  .get(authController.protect, mentorshipController.getMentorship)
  .patch(mentorshipController.updateMentorship)
  .delete(mentorshipController.deleteMentorship);

module.exports = router;

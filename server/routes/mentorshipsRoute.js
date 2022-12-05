const express = require("express");
const mentorshipController = require("../controllers/mentorshipsController");
const messageController = require("../controllers/messageController");
const resourceController = require("../controllers/resourceController");
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

router
  .route(":/mentorshipId/messages")
  .post(authController.protect, messageController.create);
module.exports = router;

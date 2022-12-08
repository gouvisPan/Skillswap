const express = require("express");
const mentorshipController = require("../controllers/mentorshipsController");
const messageRouter = require("../routes/messagesRoute");

const authController = require("../controllers/authController");
const router = express.Router();

router.use("/:mentorshipId/messages", messageRouter);

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

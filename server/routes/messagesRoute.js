const express = require("express");
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(messageController.setMentorshipId, messageController.getAll)
  .post(messageController.setMentorshipId, messageController.createMessage);

router.route("/:id").delete(messageController.deleteMessage);

module.exports = router;

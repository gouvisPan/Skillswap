const express = require("express");
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(messageController.getAll)
  .post(messageController.create)
  .delete(messageController.delete);

module.exports = router;

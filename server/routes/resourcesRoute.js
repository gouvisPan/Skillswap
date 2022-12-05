const express = require("express");
const resourceController = require("../controllers/resourceController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, resourceController.getAllResources);
router
  .route("/resource")
  .get(authController.protect, resourceController.getResource)
  .post(authController.protect, resourceController.createResource)
  .patch(authController.protect, resourceController.updateResource);

module.exports = router;

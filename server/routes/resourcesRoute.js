const express = require("express");
const resourceController = require("../controllers/resourceController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, resourceController.getAllResources);
router
  .route("/resource")
  .post(authController.protect, resourceController.createResource)
  .patch(authController.protect, resourceController.updateResource);

router
  .route("/:id")
  .get(authController.protect, resourceController.getResource)
  .post(authController.protect, resourceController.createResource)
  .patch(authController.protect, resourceController.updateResource)
  .delete(resourceController.deleteResource);
module.exports = router;

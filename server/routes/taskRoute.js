const express = require("express");
const taskController = require("../controllers/taskController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(authController.protect, taskController.getAllTasks);
router
  .route("/task")
  .post(authController.protect, taskController.createTask)
  .patch(authController.protect, taskController.updateTask);

router
  .route("/:id")
  .get(authController.protect, taskController.getTask)
  .post(authController.protect, taskController.createTask)
  .patch(authController.protect, taskController.updateTask)
  .delete(taskController.deleteTask);
module.exports = router;

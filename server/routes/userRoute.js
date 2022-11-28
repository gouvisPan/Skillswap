const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.route("/register").post(userController.registerUser);
// router.route("/login").post(userController.loginUser);
// router.route("/logout").get(userController.logoutUser);

router.route("/signup").post(authController.signUp);
router.route("/signin").post(authController.login);
router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").patch(authController.resetPassword);
router
  .route("/updateMyPassword")
  .patch(authController.protect, authController.updatePassword);

module.exports = router;

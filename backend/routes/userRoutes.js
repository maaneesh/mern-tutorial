const express = require("express");
const router = express.Router();
const {
  registerUser,
  userRoutes,
  getMe,
} = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

//Create a user
router.post("/", registerUser);

router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;

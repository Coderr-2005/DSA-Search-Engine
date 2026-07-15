const express = require("express");

const {
  getDashboard,
  addFavorite,
  removeFavorite,
  markSolved,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Dashboard
router.get("/dashboard", protect, getDashboard);

// Favorites
router.post("/favorites/add", protect, addFavorite);

router.post("/favorites/remove", protect, removeFavorite);

// Solved Problems
router.post("/solved", protect, markSolved);

module.exports = router;

const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("favoriteProblems")
      .populate("solvedProblems");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const easySolved = user.solvedProblems.filter(
      (problem) => problem.difficulty === "Easy",
    ).length;

    const mediumSolved = user.solvedProblems.filter(
      (problem) => problem.difficulty === "Medium",
    ).length;

    const hardSolved = user.solvedProblems.filter(
      (problem) => problem.difficulty === "Hard",
    ).length;

    res.json({
      profile: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },

      stats: {
        xp: user.xp,
        streak: user.streak,
        solved: user.solvedProblems.length,
        favorites: user.favoriteProblems.length,
      },

      difficulty: {
        easy: easySolved,
        medium: mediumSolved,
        hard: hardSolved,
      },

      solvedProblems: user.solvedProblems,

      favoriteProblems: user.favoriteProblems,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addFavorite = async (req, res) => {
  try {
    const { algorithmId } = req.body;

    const user = await User.findById(req.user._id);

    if (!user.favoriteProblems.includes(algorithmId)) {
      user.favoriteProblems.push(algorithmId);
      await user.save();
    }

    res.json({
      message: "Added to favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { algorithmId } = req.body;

    const user = await User.findById(req.user._id);

    user.favoriteProblems = user.favoriteProblems.filter(
      (id) => id.toString() !== algorithmId,
    );

    await user.save();

    res.json({
      message: "Removed from favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const markSolved = async (req, res) => {
  try {
    const { algorithmId } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const alreadySolved = user.solvedProblems.some(
      (id) => id.toString() === algorithmId,
    );

    if (alreadySolved) {
      return res.json({
        message: "Problem already solved",
        xp: user.xp,
        streak: user.streak,
      });
    }

    user.solvedProblems.push(algorithmId);

    user.xp += 10;

    await user.save();

    res.json({
      message: "Problem marked as solved",
      xp: user.xp,
      streak: user.streak,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
  addFavorite,
  removeFavorite,
  markSolved,
};

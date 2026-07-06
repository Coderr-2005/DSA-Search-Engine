const express = require("express");

const router = express.Router();

const algorithms = [
  {
    id: 1,
    name: "Binary Search",
    difficulty: "Easy",
    topic: "Searching",
    time: "O(log n)",
    space: "O(1)",
  },
  {
    id: 2,
    name: "Merge Sort",
    difficulty: "Medium",
    topic: "Sorting",
    time: "O(n log n)",
    space: "O(n)",
  },
  {
    id: 3,
    name: "BFS",
    difficulty: "Easy",
    topic: "Graphs",
    time: "O(V+E)",
    space: "O(V)",
  },
];

router.get("/", (req, res) => {
  res.json(algorithms);
});

module.exports = router;

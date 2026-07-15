const algorithms = [
  {
    id: 1,
    name: "Binary Search",
    difficulty: "Easy",
    topic: "Searching",
    companies: ["Google", "Amazon", "Microsoft"],
    time: "O(log n)",
    space: "O(1)",
    description:
      "Efficient searching algorithm for sorted arrays using divide and conquer.",

    cpp: `// Binary Search C++`,
    java: `// Binary Search Java`,
    python: `# Binary Search Python`,
  },

  {
    id: 2,
    name: "Merge Sort",
    difficulty: "Medium",
    topic: "Sorting",
    companies: ["Google", "Adobe", "Uber"],
    time: "O(n log n)",
    space: "O(n)",
    description: "Stable divide-and-conquer sorting algorithm.",

    cpp: `// Merge Sort C++`,
    java: `// Merge Sort Java`,
    python: `# Merge Sort Python`,
  },

  {
    id: 3,
    name: "BFS",
    difficulty: "Easy",
    topic: "Graphs",
    companies: ["Amazon", "Meta", "Atlassian"],
    time: "O(V+E)",
    space: "O(V)",

    description: "Breadth First Search traverses graph level by level.",

    cpp: `// BFS C++`,
    java: `// BFS Java`,
    python: `# BFS Python`,
  },
];
module.exports = algorithms;

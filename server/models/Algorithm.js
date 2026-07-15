const mongoose = require("mongoose");

const algorithmSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    difficulty: String,
    topic: String,
    description: String,
    companies: [String],
    time: String,
    space: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Algorithm", algorithmSchema);

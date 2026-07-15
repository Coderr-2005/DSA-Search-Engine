const Algorithm = require("../models/Algorithm");

const getAlgorithms = async (req, res) => {
  const algorithms = await Algorithm.find();
  res.json(algorithms);
};

module.exports = { getAlgorithms };

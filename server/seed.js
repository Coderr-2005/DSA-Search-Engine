require("dotenv").config();

const mongoose = require("mongoose");

const Algorithm = require("./models/Algorithm");
const algorithms = require("./data/algorithms");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Algorithm.deleteMany();

    await Algorithm.insertMany(algorithms);

    console.log("✅ Database Seeded");

    process.exit();
  })
  .catch((err) => console.log(err));

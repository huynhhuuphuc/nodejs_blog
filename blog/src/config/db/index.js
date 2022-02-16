const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_course_dev");
    console.log("Connect Succecessfully...");
  } catch (err) {
    console.log("Connect Failure...");
  }
}

module.exports = { connect };

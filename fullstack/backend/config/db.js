const mongoose = require("mongoose");

const connect = () => {
  // return mongoose.connect("mongodb://localhost:27017/fullstack");
  return mongoose.connect(
    "mongodb+srv://admin:qiLETpATrGHMy51L@cluster0.wm7t3ny.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;

// mongodb+srv://admin:<password>@cluster0.wm7t3ny.mongodb.net/?retryWrites=true&w=majority

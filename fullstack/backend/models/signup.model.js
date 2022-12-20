const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String,required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const signupModel = mongoose.model("signup", signupSchema);

module.exports = signupModel;
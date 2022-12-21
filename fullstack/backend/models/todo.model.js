const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, default: false },
  user_id: { type: mongoose.Types.ObjectId, ref: "signup" }
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;

const { Router } = require("express");
const todo = require("../models/todo.model");

const app = Router();

app.get("/", async (req, res) => {
  try {
    let todos = await todo.find();
    res.send({ message: "todos", data: todos });
  } catch (e) {
    console.log(e);
  }
});
app.post("/", async (req, res) => {
  try {
    let todos = await todo.create(req.body);
    res.send({ message: "todos", data: todos });
  } catch (e) {
    console.log(e);
  }
});
app.patch("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let todos = await todo.findByIdAndUpdate(id, req.body, { new: true });
    res.send({ message: "todos", data: todos });
  } catch (e) {
    console.log(e);
  }
});
app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let todos = await todo.findByIdAndDelete(id);
    res.send({ message: "deleted", data: todos });
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;

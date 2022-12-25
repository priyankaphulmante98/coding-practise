const express = require("express");
const connect = require("../backend/practise/config/config");
const app = express();
const userRoute = require("../backend/practise/routes/user.route");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  try {
    await connect();
    console.log("server started on port 8080 and mongodb connected");
  } catch (err) {
    console.log(err);
  }
});

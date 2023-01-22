const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
require("dotenv").config()


const connection = mongoose.connect("mongodb+srv://shreedhar:shreedhar@cluster0.urmb4ef.mongodb.net/calculator")

module.exports = connection
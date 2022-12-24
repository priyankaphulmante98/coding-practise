const connection = require("./Config/db");
require("dotenv").config()



const express = require("express");
const cors = require("cors");
const JobModel = require("./Models/job.model");
// const UserModel = require("./Models/user.model");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
	res.send("welcome home")
})
app.use(cors())
//sign up request



app.post("/admin", async (req, res) => {
	// const question= await JobModel.insertMany(req.body);
	const new_question = new JobModel(req.body);
	await new_question.save()
	res.send("added")
})

app.post("/jobs", async (req, res) => {
	const { position } = req.body
	if (position) {
		const data = await JobModel.find({position})
		res.send({ data: data })
	}
	else {
		const data = await JobModel.find()
		res.send({ data: data })
	}
})

app.listen(process.env.PORT || 8080, async () => {
	try {
		await connection;
		console.log("connection is set with mongodb")
	}
	catch (err) {
		console.log("connection couldn't be set with mongodb");
		console.log(err)
	}
	console.log(`sever has started at port ${process.env.PORT}`)
})
const express = require('express')
const cors = require('cors')
const app = express()
const signupRoute = require('./routes/signup.routes')
const loginRoute = require('./routes/login.route')
const todoRoute = require('./routes/todo.route')
const connect = require('./config/db')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())  // run frnt bckd at same local port
app.use("/signup",signupRoute)
app.use("/login",loginRoute)
app.use("/todos",todoRoute)


app.get('/', (req, res) => res.send('hello'))

app.listen(8080, async () => {
    await connect();
    console.log("mongodb connected");
    try {
    } catch (e) {
      console.log(e);
    }
  });
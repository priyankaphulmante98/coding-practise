const express  =  require('express')
const mongooseConnection = require('./config/database')
const cors = require('cors')
const productRouter = require('./routes/products')
const BookmarkRouter = require('./routes/bookmark')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Welcome Home")
})

app.use('/bookmark',BookmarkRouter)
app.use('/product',productRouter)

app.listen(process.env.PORT || 8081, async(req,res)=>{
    try{
       await mongooseConnection
       console.log(`Database connected with mongodb in port http://localhost:8080`)
    }
    catch(err){
        console.log(err)
        res.send("Connection Failed")
    }
    console.log(process.env.PORT)
})
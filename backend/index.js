 const express = require('express')
const app = express()
const port = 5000

const mongoDb = require('./db')
const cors = require('cors')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept");
    next()
})


app.get('/',(req,res)=>{
    res.send('hello world')
})


app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const DataList = require('./Routes/DataRoutes')
const LocationRoutes = require('./Routes/LocationRoutes')
const ConditionRoutes = require('./Routes/ConditionRoutes')

const app=express()

dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/data',DataList)
app.use('/location',LocationRoutes)
app.use('/condition',ConditionRoutes)




















app.get('/home',(req,res)=>{
    res.send("<html><h1>hi</h1></html>")
})


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGOOSE_DATABASE)
.then(()=>{
    console.log("Database is connected");
})
.catch((err)=>{
    console.log("Database is connection error",err);
})

app.listen(process.env.PORT,()=>{
    console.log("Server is connected");
})
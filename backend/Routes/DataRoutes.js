const DataRouter = require('express').Router()
const Location = require('../Schemas/LocationSchema')
const Condition = require('../Schemas/ConditionSchema')
const data = require('../data')

DataRouter.get('/api',async(req,res)=>{

        // await Location.deleteMany({})
        const CreateLocation = await Location.insertMany(data.Location)

        // await Condition.deleteMany({})
        const CreateCondition = await Condition.insertMany(data.Condition)

        res.send({CreateLocation,CreateCondition})

})

module.exports = DataRouter
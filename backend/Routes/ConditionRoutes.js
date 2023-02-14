const ConditionRoutes = require('express').Router();
const Condition = require('../Schemas/ConditionSchema')

ConditionRoutes.get('/',async(req,res)=>{
    const condition = await Condition.find()
    res.send(condition)
})

module.exports = ConditionRoutes
const LocationRoutes = require('express').Router();
const Location = require('../Schemas/LocationSchema')

LocationRoutes.get('/',async(req,res)=>{
    const location = await Location.find()
    res.send(location)
//    const input =  req.body._id
//    Location.findById(id)

})

module.exports = LocationRoutes
const mongoose = require('mongoose')

const ConditionSchema = new mongoose.Schema(
    {
        condition:{type:String,required:true}
    }
)

const Condition = mongoose.model('Condition',ConditionSchema)
module.exports = Condition
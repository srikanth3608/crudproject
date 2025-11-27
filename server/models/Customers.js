const mongoose = require('mongoose')
const CustomerSchema = mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    date:{type:String,required:true},
    details:{type:String,required:true}
})
const Customer = mongoose.model('Customer_List', CustomerSchema)
module.exports = Customer
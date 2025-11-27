const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    availability:{type:String,required:true},
    image:{type:String},
})
const Product = mongoose.model('Product_List', ProductSchema)
module.exports = Product
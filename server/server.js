const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE']
}))
app.use(express.json())

const ProductModel = require('./models/Product')
mongoose.connect('mongodb://localhost:27017/Event_ProductDB')
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err))

// add data
app.post('/insert', async(req,res) => {
    const {name,price,quantity,availability,image} = req.body
    const product = new ProductModel({
        name:name,
        price:price,
        quantity:quantity,
        availability:availability,
        image:image
    })
    try{
        const result = await product.save()
        res.send(result)
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
})

// get data
app.get('/read',async(req,res) => {
    try{
        const result = await ProductModel.find()
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})

app.delete('/delete/:id',async(req,res) => {
    const id = req.params.id
    try{
        const result = await ProductModel.findByIdAndDelete(id)
        if(!result){
            return res.send("Product not found")
        }else{
            res.send("Product Deleted")
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error")
    }
})

app.put('/edit',async(req,res) => {
    const {id,newName,newPrice,newQuantity,newAvailability,newImage} = req.body
    const UpdatedProduct = await ProductModel.findById(id)
    try{
        UpdatedProduct.name = newName;
        UpdatedProduct.price = newPrice;
        UpdatedProduct.quantity = newQuantity;
        UpdatedProduct.availability = newAvailability;
        UpdatedProduct.image = newImage
        await UpdatedProduct.save()
        res.send("Data updated")
    }
    catch(err){
        console.log(err);
    }
})

const CustomerModel = require('./models/Customers')
app.post('/customerInsert', async(req,res) => {
    const {name,phone,date,details} = req.body
    const Customer = new CustomerModel({
        name:name,
        phone:phone,
        date:date,
        details:details
    })
    try{
        const result = await Customer.save()
        res.send(result)
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(3001, () => console.log("Server Connected"))
const express = require ('express')
const mongoose = require('mongoose')

const db = require('../db')

const router = express.Router()


router.post('/foodData',async(req,res)=>{


    try {
        const food_items =   await mongoose.connection.db.collection("food_items").find({}).toArray()

        const food_Cat = await mongoose.connection.db.collection("food_category").find({}).toArray()


        console.log("ded");
        console.log(food_items);
        console.log(food_Cat)
        res.send([food_items,food_Cat])
    } catch (error) {
        
        console.log(error.message)
        res.send("server error")
    }
})


module.exports = router
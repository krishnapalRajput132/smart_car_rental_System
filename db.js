const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://krishna:KPrajput$777@cluster0.2a91fsi.mongodb.net/mycar' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routers/bookRouters');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const db_url = process.env.db_url;

const connectDB = async()=>{
    try{
        await mongoose.connect(db_url);
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Error connecting to Database");
    }
}

connectDB();

app.use('books',bookRoutes);

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
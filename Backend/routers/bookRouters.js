const express = require('express');
// const mongoose = require('mongoose');
const Library = require('../models/bookSchema');
const app = express.Router();

app.post('/',async(req,res)=>{
    try{
        const newBook = await new Library(req.body).save();
        res.send(newBook);
    }
    catch(error){
        res.status(error.status || 500).json({message : error.message})
    }
})

app.get('/',async(req,res)=>{
    try{
        const books = await Library.find();
        res.send(books);
    }
    catch(error){
        res.status(error.status || 500).json({message : error.message})
    }
})

app.get('/:id',async(req,res)=>{
    try{
        const book = await Library.findById(req.params.id);
        if(!book){
            return res.status(404).json("no such books found");
        }
        res.send(book);
    }
    catch(error){
        res.status(error.status || 500).json({message : error.message})
    }
})

app.put('/:id',async(req,res)=>{
    try{
        const upBook = await Library.findByIdAndUpdate(req.params.id);
        res.status(upBook);
    }
    catch(error){
        res.status(error.status || 500).json({message : error.message})
    }
})

app.delete('/:id',async(req,res)=>{
    try{
        const delBook = await Library.findByIdAndDelete(req.params.id);
        res.send(delBook);
    }
    catch(error){
        res.status(error.status || 500).json({message : error.message})
    }
})

module.exports = app;
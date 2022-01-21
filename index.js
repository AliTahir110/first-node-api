const express = require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')

//import models 
const Post=require('./src/models/post.js');

//Define application
const app=express()

//Define DB connection
const db = mongoose.connect('mongo://localhost:27017/first-node-api-db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
    // handle the request for route round
res.send({ping:"pong"})
})



// operations: Create, Read, Update, Delete (Cruid)
app.post('/posts', function(req,res){
    const title = req.body.title
    const author= req.body.author
    const content=req.body.content
res.send({title:title, author:author, content:content})
});

app.listen(3000, function() {
    console.log('Server is running at port 3000')
})
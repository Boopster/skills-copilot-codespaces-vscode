// create web server for comments
// 1. create web server
// 2. create database connection
// 3. create schema
// 4. create model
// 5. create router
// 6. create route
// 7. create view

// 1. create web server
const express = require('express');
const app = express();

const PORT = 3000;

// 2. create database connection
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// 3. create schema
const Comment = require('./models/comment');

// 4. create model
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 5. create router
const router = require('./routes')(app, Comment);

// 6. create route
const server = app.listen(PORT, function(){
    console.log('Server running on port: ' + PORT);
});

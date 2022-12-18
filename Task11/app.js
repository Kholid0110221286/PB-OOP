// import express
const express = require('express');
// import router 
const router = require('./routes/api.js');
const app = express();

// using middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// using routing
app.use(router);

// mendefinisikan port
app.listen(3000);
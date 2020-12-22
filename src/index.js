const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routers
app.use(require('./routes/index'));

// Static Content
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
const port = typeof process.env.PORT !== 'undefined' ? process.env.PORT : 3000; 
app.listen(port);
console.log(`Start Server on port ${port}`);
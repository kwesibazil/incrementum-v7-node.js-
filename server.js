const express = require('express');

const path = require("path");
const morgan = require('morgan');
const mongoose = require('mongoose');

const url =  'mongodb://localhost:27017/webapp'
mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('open', _ => console.log('Database connected'));

const server = express();

//server.use(morgan('dev'));
server.use(express.json());


// server.use('/api', require('./src/routes/goal'))
server.use('/api/authentication', require('./src/routes/authentication'))




const PORT = process.env.PORT || 5000;
server.listen(PORT, _ => console.log(`Server started on port ${PORT}`));

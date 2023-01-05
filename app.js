const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})
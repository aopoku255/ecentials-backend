const express = require('express')
require('dotenv').config();

const app = express();
const keys = require('./../keys.json')

app.set('keys', keys.ecentials)

const routes = require('../routes/v1/routes')

//connect to database
const mongoose = require('./database/mongodb.js')(app.get('keys').db_name)

//send post requests
app.use(express.json())

//Route middleware
app.use('', routes)

app.listen(process.env.PORT || 3001 , () => console.log('Server running on port 3001'))
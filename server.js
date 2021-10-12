const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()
require("./src/models/users")
const api = require('./src/api');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', api);
app.use(express.json());




app.listen(3003, console.log("Server is Running !!"));



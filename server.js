const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require ("./routes");
require('dotenv').config()
require("./src/models/users")
const api = require('./src/api');


app.use('/api/v1', api);
app.use(express.json());
app.use(routes);



app.listen(port, () => console.log(`Server runnig!!`));



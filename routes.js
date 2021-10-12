const express = require("express");
const routes = express();

routes.get('/', (req, res) =>{ res.json('working')})

module.exports = routes;
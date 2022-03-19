'use strict'
const request = require('request');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`server running at http://localhost:${port}`));
require("./config/com_db");
var routes = require("./API/routes/com_routes");
routes(app);
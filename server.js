require('dotenv').config();

var express = require('express');
var app = express();
var router = require('./config/routes.js');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

let port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
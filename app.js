var express = require('express');
var cors = require('cors')
var cors = require('cors')
var app = express();
var db = require('./db');
global.__root = __dirname + '/';

app.use(cors())


app.get('/api', function (req, res) {
  res.json({
    msg: 'This is CORS-enabled for all origins!'
  })

});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;

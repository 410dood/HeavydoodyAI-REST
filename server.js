const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// var MongoClient = require('mongodb').MongoClient,
//     assert = require('assert');

// // Connection URL
// var db = 'mongodb://admin:password@ds019638.mlab.com:19638/heavydoodyai-db';

// // Use connect method to connect to the server
// MongoClient.connect(url, function (err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     db.close();
// });

const db = knex({
  client: 'pg', //NODE-POSGRESS - Non-blocking PostgreSQL client for Node.js.Pure JavaScript and optional native libpq bindings.
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

app.get('/', (req, res) => {
  res.send('it is working!')
});
app.post('/signin', (req, res) => {
  signin.handleSignin(req, res, db, bcrypt)
});
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt)
});
app.get('/profile/:id', (req, res) => {
  profile.handleProfileGet(req, res, db)
});
app.put('/image', (req, res) => {
  image.handleImage(req, res, db)
});
app.post('/imageurl', (req, res) => {
  image.handleApiCall(req, res)
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

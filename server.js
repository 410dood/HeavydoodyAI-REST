require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// initialize database
const db = knex({
  client: 'pg',
  connection: {
    connectionString: 'postgres://jjdgeszssptiml:84977e9a62755e351393fab43ca0531a5ce19ee74703beb1b7329af7286066d8@ec2-50-19-224-165.compute-1.amazonaws.com:5432/d3qeeker20imt',
    ssl: true,
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('it is working!')
  if (req.body) res.send(db.users);
});

app.post('/signin', signin.handleSignin(db, bcrypt));

app.post('/register', register.handleRegister(db, bcrypt));

app.get('/profile/:id', profile.handleGetProfile(db));

app.put('/image', image.handleSubmitImage(db));
app.post('/imageurl', image.handleApiCall);

const PORT = (process.env.PORT || 3000);
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

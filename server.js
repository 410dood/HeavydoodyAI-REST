require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var expressSession = require('express-session');
var passportConfig = require('./passport');
var db = require('./models');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var profileRouter = require('./routes/profile');
// var dataRouter     = require('./routes/data');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));


// enable cors
app.use(cors({
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}));

app.use(expressSession({
  secret: process.env.SESSION_SECRET
  , resave: true
  , saveUninitialized: true
  // ,cookie: {
  // 	secure: false
  // 	,maxAge: 60*360
  // }
}));

app.use(passportConfig.initialize());
app.use(passportConfig.session());


app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
// app.use('api/v1', dataRouter);


// app.get('/api/v1/data', function(req, res) {
// 	db.User.find({}, function(err, users) {
// 		if (err) { console.log('############## error finding users:\n', err) }
// 		let usersIds = [];
// 		users.forEach(user => usersIds.push(user.twitterId));
// 		usersIds.sort();
// 		db.Tweet.find({}, function (error, tweets) {
// 			if (error) { console.log('############## error finding tweets:\n', error) }
// 			let tweetCategories = [];
// 			tweets.forEach(tweet => tweetCategories = tweetCategories.concat(tweet.categories));
// 			tweetCategories = tweetCategories.filter((word, i) => i === tweetCategories.indexOf(word));
// 			tweetCategories.sort();
// 			res.send({ usersIDs: usersIds, categories: tweetCategories });
// 		});
// 	});
// })

app.get('*', function (req, res) {
  res.send('404');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port 8080');
});
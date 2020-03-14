// 'Hey there' message when server starts
const camelCase = require('camelcase');
console.log(camelCase('server-started'));

// Express ---------------------------------------------------------------------------------------
const express = require('express');

// Init express
const app = express();

// Define static files folder
app.use('/static', express.static('static'));

// EJS -------------------------------------------------------------------------------------------
app.set('view engine', 'ejs');

// Use body-parser and slug ----------------------------------------------------------------------
const slug = require('slug');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// MongoDB ---------------------------------------------------------------------------------------
const mongo = require('mongodb');

require('dotenv').config();

let db = null;
let url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + "/test?retryWrites=true&w=majority";

mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(process.env.DB_NAME);
  console.log('Connected to database');
})

// Creating end points/route handlers ------------------------------------------------------------
app.get('/', allUsers);
app.get('/browsepage', allUsers);
app.get('/likedpage', likedUsers);
app.get('/profile/:id', profile);
app.post('/:id', like);
app.delete('/:id', remove);

function allUsers(req, res, next) {
  db.collection('users').find({liked: false}).toArray(done);

  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.render('index.ejs', {data: data});
    }
  } 
}

function profile(req, res, next) {
  let id = req.params.id;
  db.collection('users').findOne({
    id: id
  }, done)

  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.render('profile.ejs', {data: data});
    }
  }
}

function likedUsers(req, res, next) {
  db.collection('users').find({liked: true}).toArray(done)

  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.render('likedpage.ejs', {data: data});
    }
  } 
}

function like(req, res, next) {
  let id = req.params.id;
  if ('likebutton' in req.body) {
    db.collection('users').updateOne({id: id}, {$set: {"liked": true}});
  } else if ('dislikebutton' in req.body) {
    db.collection('users').updateOne({id: id}, {$set: {"liked": false}});
  }
}

function remove(req, res, next) {
  let id = req.params.id;
  db.collection('users').deleteOne({id: id});
}

// Listen on a port
app.listen(3000);


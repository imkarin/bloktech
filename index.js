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

// Use body-parser ----------------------------------------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// MongoDB ---------------------------------------------------------------------------------------
const mongo = require('mongodb');

require('dotenv').config();

let db = null;
let userid = null;
let userCollection = null;
let url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + "/test?retryWrites=true&w=majority";

mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(process.env.DB_NAME);
  console.log('Connected to database');
  
  // You're a user, with a specific ID (009), logged into the app, connected to your own DB collection...
  userid = "009";
  userCollection = db.collection("user" + userid);
})


// Creating route handlers ------------------------------------------------------------
app.get('/', allUsers);
app.get('/browsepage', allUsers);
app.get('/likedpage', likedUsers);
app.get('/profile/:id', profile);
app.post('/:id', like);
app.delete('/:id', remove);
app.use(onNotFound);

function allUsers(req, res, next) {
  userCollection.find({liked: false}).toArray(done);
  
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
  userCollection.findOne({
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
  userCollection.find({liked:true}).toArray(done);
  
  function done(err, data) {
    if (err) {
      next(err);
    } else {
      let matches = [];
      let pending = [];
      
      // divide the liked people into two arrays: matches and pending
      for (i = 0; i < data.length; i++) {
        if (data[i].likedPeople.includes(userid)) {
          matches.push(data[i]);
        } else {
          pending.push(data[i]);
        } 
      } 
      likedPageContent = {
        matches: matches,
        pending: pending
      };
    
      // render the matching and pending arrays into the html
      res.render('likedpage.ejs', {data: likedPageContent});
    }
  } 
}

function like(req, res, next) {
  let id = req.params.id;
  userCollection.updateOne({id: id}, {$set: {"liked": true}});
  res.redirect('/');
}

function remove(req, res, next) {
  let id = req.params.id;
  userCollection.deleteOne({id: id});
}

function onNotFound(req, res, next) {
  res.status(404).sendFile(__dirname + "/static/notfound.html")
}

// Listen on a port
app.listen(3000);


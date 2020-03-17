// "Server started" message --------------------------------------------------------------------
console.log("Server started, wait for database to connect...");

// Express --------------------------------------------------------------------------------------
const express = require("express");
const app = express();

// Define static files folder -------------------------------------------------------------------
app.use("/static", express.static("static"));

// EJS ------------------------------------------------------------------------------------------
app.set("view engine", "ejs");

// Use body-parser ------------------------------------------------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// MongoDB ---------------------------------------------------------------------------------------
require("dotenv").config();
const mongo = require("mongodb");

let db = null;
let userid = null;
let userCollection = null; // every user has his own personal collection in the db, with data about their connections (people he has liked)
let url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + "/test?retryWrites=true&w=majority";

mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(process.env.DB_NAME);
  console.log("Connected to database.");
  
  // the allUsersCollection contains general data about all user accounts
  allUsersCollection = db.collection("allUsers");
})

// Session --------------------------------------------------------------------------------------
let session = require("express-session");

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true  
}))

// Creating route handlers ----------------------------------------------------------------------
app.get("/", allUsers);
app.get("/login", loginPage);
app.get("/browsepage", allUsers);
app.get("/likedpage", likedUsers);
app.get("/profile/:id", profile);
app.post("/login", login);
app.post("/:id", like);
app.delete("/:id", remove);
app.use(onNotFound);

function loginPage(req, res, next) {
  res.render("login.ejs");
}

function login(req, res, next) {
  req.session.currentUser = req.body.user;
  userid = req.session.currentUser;
  userCollection = db.collection("user" + userid);
  res.redirect("/");
  console.log("You are now logged in as user " + userid);
}

function allUsers(req, res, next) {
  // if a user is logged in, load their data
  if (userid !== null) {
    allUsersCollection.find({"id": { $ne: userid }, "ratedBy": { $nin: [userid]}}).toArray(done);
    
    function done(err, data) {
      if (err) {
        next(err);
      } else {
        res.render("index.ejs", {data: data});
      }
    } 
  } else {
    res.redirect("/login");
  }
}
  
function profile(req, res, next) {
  let id = req.params.id;
  allUsersCollection.findOne({
    id: id
  }, done)
  
  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.render("profile.ejs", {data: data});
    }
  }
}

function likedUsers(req, res, next) {
  // if the user is logged in, load their likedlist
  if (userid !== null) {
    // update which userCollection we're in now (the logged in user)
    userCollection = db.collection("user" + userid);
    userCollection.find().toArray(done);
    
    function done(err, data) {
      if (err) {
        next(err);
      } else {
        let matches = [];
        let pending = [];
        
        // divide the liked people into two arrays: matches and pending
        for (i = 0; i < data.length; i++) {
          if (data[i].matched == true) {
            matches.push(data[i]);
          } else if (data[i].matched == null) {
            pending.push(data[i]);
          } 
        } 
        likedPageContent = {
          matches: matches,
          pending: pending
        };
        
        // render the matching and pending arrays into the html
        res.render("likedpage.ejs", {data: likedPageContent});
      }
    } 
  } else {
    res.redirect("/login");
  }
}

function like(req, res, next) {
  let id = req.params.id;
  // add our user to the liked person"s ratedBy array
  allUsersCollection.updateOne({id: id}, {$push: {"ratedBy": userid}});
  
  // add liked person to our user"s hasLiked array
  allUsersCollection.updateOne({id: userid}, {$push: {"hasLiked": id}});

  // add liked person to our user"s liked collection
  allUsersCollection.findOne({id : id}, addToCollection)

  function addToCollection(err, data) {
    if (err) {
      next (err)
    } else {
      // if liked person had already liked user, set their matched status to true
      let matchedStatus;

     if (!data.hasDisliked.includes(userid)) {
      if(data.hasLiked.includes(userid)) {
        matchedStatus = true;
      } else {
        matchedStatus = null;
      }
       
      console.log(data.id + " liked by " + userid);
       userCollection.insertOne({
         id: data.id,
         firstName: data.firstName,
         lastName: data.lastName,
         photo: data.photo,
         msg: "What's up!",
         matched: matchedStatus
        })
        
        // update matched status in the other person"s collection too
        db.collection("user" + data.id).updateOne({id: userid}, {$set: {matched: matchedStatus}});
      }
    }
  }
  res.redirect("/");
}

function remove(req, res, next) {
  let id = req.params.id;
  console.log(id + " disliked by " + userid)
  // add our user to the liked person"s ratedBy array
  allUsersCollection.updateOne({id: id}, {$push: {"ratedBy": userid}});

  // add disliked/removed person to the user"s hasDisliked array
  allUsersCollection.updateOne({id: userid}, {$push: {"hasDisliked": id}});

  // remove person from user"s liked collection
  userCollection.deleteOne({id: id});

  // remove user from person"s liked collection
  db.collection("user" + id).deleteOne({id: userid});
}

function onNotFound(req, res, next) {
  res.status(404).sendFile(__dirname + "/static/notfound.html")
}

// Listen on a port
app.listen(3000);


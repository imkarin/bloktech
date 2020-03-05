// 'Hey there' message when server starts
const camelCase = require('camelcase');
console.log(camelCase('hey-there'));

// Require node's path module
const path = require('path');

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

// users and their data
class Person{
  constructor(name, age, id, photo, msg, desc, liked) {
      this.name = name;
      this.age = age;
      this.id = id;
      this.photo = photo;
      this.msg = msg;
      this.desc = desc;
      this.liked = liked;
  }
}

let Olivia = new Person('Olivia Delroy', '24', '001', 'girl.jpeg', `Hey! I love all of the bands in your...`, `Sup, I'm Olivia and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)
let Kayla = new Person('Kayla Solomon', '25', '002', 'girl1.jpeg', `What's up :-)`, `Sup, I'm Kayla and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)
let Nadia = new Person('Nadia Williams', '23', '003', 'girl2.jpeg', `lol ikr`, `Sup, I'm Nadia and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)
let Eve = new Person('Eve Johnson', '24', '004', 'girl3.jpeg', `Are you going to DLDK this year?`, `Sup, I'm Eve and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)
let Abby = new Person('Abby Watts', '25', '005', 'girl4.jpeg', `Yeah, saw them live 3 weeks ago.`, `Sup, I'm Abby and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)
let Christina = new Person('Christina May', '25', '006', 'girl5.jpeg', `Digimon or pokemon?`, `Sup, I'm Christina and I like video games n movies. My fav food is pizza and I love walking my dogs in my free time.`, false)

const data = {
  likedPeople: [],
  people: [Olivia, Kayla, Nadia, Eve, Abby, Christina]
}

let i = data['people'].length - 1;

// Creating end points/route handlers ------------------------------------------------------------
app.get('/', (req, res) => {
    res.render('index', data);
})

app.get('/browsepage', (req, res) => {
  res.render('index', data);
})

app.get('/profile', (req, res) => {
  res.render('profile', data);
})

app.get('/likedpage', (req, res) => {
  res.render('likedpage', data);
})

// Get input: like button/checkbox and console this in the terminal
app.post('/', (req, res) => { 
  // if user liked a person, this person gets added to the likedlist
  if ('likebutton' in req.body) {
    data['people'][i].liked = true;
    data['likedPeople'].push(data['people'][i]);
  }
  // remove the (dis)liked person from the 'people (to display)' list
  data['people'].splice(i);
  i--;
})

// Listen on a port
app.listen(3000);


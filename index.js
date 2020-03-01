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

// Creating end points/route handlers ------------------------------------------------------------

/* Old homework

// Send static (html) file:
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/pagina.html'));
})

// Send static (mp3) file:
app.get('/mp3', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/audio/bruh.mp3'));
})

// Display query parameters on the page: 
app.get('/user/:username', function (req, res) {
  const data = {naam: req.params['username'], movies: ['Uncut Gems', 'Inception', 'Alita: Battle Angel']};
  res.render('pagina', data)
})

*/

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/browsepage', (req, res) => {
  res.render('index');
})

app.get('/profile', (req, res) => {
  res.render('profile');
})

app.get('/likedpage', (req, res) => {
  // users
  class Person{
    constructor(name, age, id, photo, msg) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.photo = photo;
        this.msg = msg;
    }
  }

  let Olivia = new Person('Olivia Delroy', '24', '001', 'girl.jpeg', `Hey! I love all of the bands in your...`)
  let Kayla = new Person('Kayla Solomon', '25', '002', 'girl1.jpeg', `What's up :-)`)
  let Nadia = new Person('Nadia Williams', '23', '003', 'girl2.jpeg', `lol ikr`)
  let Eve = new Person('Eve Johnson', '24', '004', 'girl3.jpeg', `Are you going to DLDK this year?`)
  let Abby = new Person('Abby Watts', '25', '005', 'girl4.jpeg', `Yeah, saw them live 3 weeks ago.`)
  let Christina = new Person('Christina May', '25', '006', 'girl5.jpeg', `Digimon or pokemon?`)

  const data = {
    likedPeople: [Olivia, Kayla, Nadia, Eve, Abby, Christina]
  }

  res.render('likedpage', data);
})


// Listen on a port
app.listen(3000);


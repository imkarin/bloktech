// 'Hey there' message when server starts
const camelCase = require('camelcase');
console.log(camelCase('hey-there'));

// Require node's path module
const path = require('path');

// Express
const express = require('express');

// Init express
const app = express();

// Define static files folder
app.use(express.static('public'));

// Creating end points/route handlers
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pagina.html'));
})

app.get('/contact', (req, res) => {
    res.send('Contact route');
})

app.get('/mp3', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/audio/bruh.mp3'));
})

app.get('/profile', (req, res) => {
  console.log(req.query);
  res.send(`You're viewing ` + req.query['username'] + `'s profile`);
})


// 404 - route not found


// Listen on a port
app.listen(3000);


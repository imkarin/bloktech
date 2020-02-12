const camelCase = require('camelcase');
console.log(camelCase('hey-there'));


// Express
const express = require('express');

// Init express
const app = express();

// Listen on a port
app.listen(3000);

// Creating end points/route handlers
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About route')
})

app.get('/contact', (req, res) => {
    res.send('Contact route')
})

// 404 - route not found

// Load static files
app.use(express.static('public'));
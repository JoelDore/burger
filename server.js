// require('dotenv').config()

// Express
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Controller
const routes = require('./controllers/burgers_controller.js')
app.use(routes)

// Start server
const PORT = process.env.EXPRESS_PORT || 8080;

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:%s', PORT)
});
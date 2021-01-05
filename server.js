require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log('Server listening on PORT %s', PORT)
});
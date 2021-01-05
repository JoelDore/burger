require('dotenv').config()
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DB
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected!')
});

module.exports = connection
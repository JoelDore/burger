// require('dotenv').config()
const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: 'root',
        password: process.env.PASSWORD || 'password',
        database: process.env.DB || 'database'
    });
}

connection.connect(err => {
    if (err) throw err;
    console.log('Connected!')
});

module.exports = connection
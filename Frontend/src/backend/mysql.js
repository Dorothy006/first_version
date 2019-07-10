const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
    host: '165.227.42.25',
    user: 'root',
    password: '1fb45e7e28d4816f6c519f30d800162e7e82cb462fe9f6d1',
    database: 'live',
    multipleStatements: true,
    connectionLimit: 10
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/user', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM user LIMIT 0, 10', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3000, () => {
    console.log('Go to http://165.227.42.25:3000/user to see posts');
});
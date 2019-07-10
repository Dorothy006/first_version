const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');

// Initialize the app
const app = express();

const connection = mysql.createConnection({
    host: '165.227.42.25',
    user: 'app',
    password: 'dongxue123',
    database: 'live'
    // multipleStatements: true,
    // connectionLimit: 10
})

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) throw error;
        res.json(rows)
    });

    // connection.end();
});

app.post("/newUser", (req, res) => {

    var post = {
        username: req.param("username"),
        password: req.param("password"),
        level: 0,
        email: req.param("email"),
        email_verify_key: 'null'
      };
    
      console.log(post);

    var sql = "INSERT INTO user (username, password, level, email, email_verify_key) VALUES (?)";
    connection.query(sql,post,function(error, result){
        if (error) throw error;
        console.log("1 record inserted");
        res.json({msg:'success'});
    });

});


// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000 to see api');
});

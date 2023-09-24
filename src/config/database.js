var mysql = require('mysql');
var db = require('./db.config');

var connection = mysql.createConnection({
    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DB
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("databases connected");
});
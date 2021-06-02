const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pesquisa_cientifica'
})

// connection.connect();
// connection.query('SELECT 1+ 1 as solution', function (err, rows, fields) {
//     if (err) console.log(err);

//     console.log('The solution is: ', rows[0].solution);
// });
// connection.end();


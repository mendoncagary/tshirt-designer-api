var mysql = require('mysql');

// Application initialization

var connection = mysql.createConnection({
    host     : '35.200.155.31',
    user     : 'root',
    password : 'asdfghjkl',
    database: 'freshprints',
    timeout: 60000
});

connection.connect(function(err){
    if(err) throw err;
    console.log("You are now connected")
})

module.exports = connection;
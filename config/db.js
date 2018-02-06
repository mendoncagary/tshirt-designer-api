var mysql = require('mysql');

// Application initialization

var connection = mysql.createConnection({
    host     : 'freshprints.cqae0klixddl.ap-south-1.rds.amazonaws.com',
    user     : 'toor',
    password : '12345678',
    database: 'freshprints',
    timeout: 60000
});

connection.connect(function(err){
    if(err) throw err;
    console.log("You are now connected")
})

module.exports = connection;
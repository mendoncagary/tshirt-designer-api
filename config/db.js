var mysql = require('mysql');

// Application initialization

var pool = mysql.createPool({
    connectionLimit: 10,
    host     : '35.200.155.31',
    user     : 'root',
    password : 'asdfghjkl',
    database: 'freshprints'
});

// connection.connect(function(err){
//     if(err) throw err;
//     console.log("You are now connected")
// })

module.exports = pool;
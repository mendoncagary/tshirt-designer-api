var pool = require('../config/db');

var Tshirt = {

addDesign: function(tshirt,callback)
{
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   
        return connection.query("Insert into tshirts(design,img,name) values(?,?,?)",[tshirt.data, tshirt.img,tshirt.name],callback);
   
        connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
},

getTshirtById: function(id, callback)
{
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   
        return connection.query("select * from tshirts where id=?", [id], callback);
        connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
    
},

getAllTshirts: function(callback)
{
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   
        return connection.query("Select * from tshirts", callback);
               connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
 }

}

module.exports = Tshirt;

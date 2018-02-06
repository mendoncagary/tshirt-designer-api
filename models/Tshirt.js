var db = require('../config/db');

var Tshirt = {

addDesign: function(tshirt,callback)
{
    return db.query("Insert into tshirts(design,img,name) values(?,?,?)",[tshirt.data, tshirt.img,tshirt.name],callback);
},

getTshirtById: function(id, callback)
{
    return db.query("select * from tshirts where id=?", [id], callback);
},

getAllTshirts: function(callback)
{
    return db.query("Select * from tshirts", callback);
}

}

module.exports = Tshirt;

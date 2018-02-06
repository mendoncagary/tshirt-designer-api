var express = require('express');
var router = express.Router();
var Tshirt = require('../models/Tshirt');


     router.get('/',function(req,res){
        res.send("/ path")
     });

     router.get('/fetch/:id?',function(req,res){
         if(req.params.id)
         {
            Tshirt.getTshirtById(req.params.id, function(err,rows)
            {
                if(err)
                res.json(err);
                else
                res.json(rows);
            })
         }
         else
         {
             Tshirt.getAllTshirts(function(err,rows)
            {
                if(err)
                res.json(err);
                else
                res.json(rows);
            })
         }
     });


     router.post('/save',function(req,res){
           Tshirt.addDesign(req.query,function(err, count)
           {
               if(err)
               {
                   res.json(err);
               }
               else
               {
                   res.json(res.body);
               }
           }); 
    });

module.exports = router;
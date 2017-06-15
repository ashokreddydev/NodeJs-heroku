var express=require('express');



module.exports=function()
    {
    var app=express();
    app.set('view engine', 'ejs');


    
app.get('/',function(req,res){
    
     res.render('home');
   


})

    return app;
    }
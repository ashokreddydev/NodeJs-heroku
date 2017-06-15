var express = require('express');
var router = express.Router();
var Admin= require("./../models/Admin");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {

var user=new Admin();
		user.Username=req.body.Username;
		user.FirstName=req.body.FirstName;
		user.LastName=req.body.LastName;
		user.Email=req.body.Email;
	
	user.save(function(err,obj){
		if(err){
            
			console.log("Error:"+err);
		}else{
			
			console.log("Success:"+obj);
			res.json(obj);
        } 



	});
		


});





module.exports = router;

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
module.exports = mongoose.model('lollypops', new Schema({
    Username: {type:String,trim:true},
	FirstName:{type:String,trim:true},
	LastName:{type:String,trim:true},
	Email:{type:String,trim:true}
	


	
}));
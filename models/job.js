var mongoose =require('mongoose');
var Schema = mongoose.Schema;

// Here we define the model, has the same elements at the Base Date
var JobSchema = Schema({

    title:String,
    description: String,
    keywords: String,
    location: String

});

module.exports = mongoose.model('Job',JobSchema);

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.Port|| 3000 ;

// here made the connection with the data base

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/jobDB')
mongoose.connect('mongodb+srv://admin:admin@cluster0.vm8xd.mongodb.net/jobDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("The Database was connected successfully");
    // create server
    app.listen(port,()=>{
        console.log("Server running correctly");
    });
})
.catch(err =>console.log(err));


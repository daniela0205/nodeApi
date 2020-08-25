var Job = require('../models/job');
const job = require('../models/job');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'I am home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'I am test of controller'
        });
    },

    // Fuction to save a new Job

    saveJob: function(req, res){
       var job = new Job();

       var params = req.body;

       job.title = params.title;
       job.description = params.description;
       job.keywords = params.keywords;
       job.location = params.location;

       job.save((err,jobStored) => {
           if(err) return res.status(500).send({message:'Error to save the job'});

           if(!jobStored) return res.status(404).send({message:'Could not save the job'});
       
           return res.status(200).send({job: jobStored});
       
        });   
    },

    // function te return a specific job. 

    getJob: function(req, res){
        var jobId = req.params.id;
     
        if(jobId == null)return res.status(404).send({message:'the job not exist'});
        

        Job.findById(jobId,(err,job)=>{
            
            if(err) return res.status(500).send({message:'Error to return data'});

            if(!job) return res.status(404).send({message:'the job not exist'});

            return  res.status(200).send({job});
        });
    }, 

    // function that return all Job that are register at the DataBase

    getJobs: function(req, res){

        job.find({}).exec((err,jobs) => 
        {   

            if(err) return res.status(500).send({message:'Error to return data'});

            if(!job) return res.status(404).send({message:'Not jobs to show'});

            return  res.status(200).send({jobs});
            
        });
    },

    // Function to upate a job 

    updateJob: function(req, res){
        var jobId = req.params.id;
        var update = req.body;

        job.findByIdAndUpdate(jobId,update, {new:true}, (err,jobUpdated)=>{

            if(err) return res.status(500).send({message:'Error at updated'});

            if(!jobUpdated) return res.status(404).send({message:'Not existe the job to update'});

            return  res.status(200).send({job:jobUpdated});

        });
    },

    // function that delete or remove from the database
    
    removeJob: function(req, res){
        var jobId = req.params.id;
    
        job.findByIdAndRemove(jobId, (err,jobRemoved)=>{

            if(err) return res.status(500).send({message:'Error to Delet the job'});

            if(!jobRemoved) return res.status(404).send({message:'Not exist this job to delete'});

            return  res.status(200).send({job:jobRemoved});  
        }); 
    },
};

module.exports = controller;
var express = require('express');

var JobController = require('../controllers/job');

var router = express.Router();

//  here is decalred the routers

router.get('/home', JobController.home);

router.post('/test', JobController.test);

router.post('/savejob', JobController.saveJob);

router.get('/job/:id?', JobController.getJob);

router.get('/jobs', JobController.getJobs);

router.put('/job/:id', JobController.updateJob);

router.delete('/job/:id', JobController.removeJob);

module.exports = router;
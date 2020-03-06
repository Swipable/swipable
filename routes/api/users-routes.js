const express = require('express').Router();
const usersController = require('../../controllers/usersController');
const db = require('../../models');

/*
  USER ROUTES
*/

module.exports = function(app) {

app.route('/api/signup')
    .get(usersController.findAll)
    .post(usersController.create)
    

//LOGIN ROUTING -- CURRENTLY NOT IMPLEMENTED
    app.route('/api/login')
        .post(usersController.findOne)

   }


// //PUT to update user's profile

// //POST method to .findOne wer where username: username

// //GET logout to stop session

// //GET all data for one user

// module.exports = router;
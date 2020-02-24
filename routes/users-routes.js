
const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

// route for user signup
router
    .get('/signup', (req, res, next) => {
        console.log('get method for signup')
        next()
    })
    .post('/signup', (req, res) => {
        Users.create({
            first_name: req.body.inputFirstName,
            last_name: req.body.inputLastName,
            username: req.body.inputUsername,
            email: req.body.inputEmail,
            password: req.body.inputPassword,
            zip_code: req.body.inputZipCode
        })
        .then(user => {
            console.log('signup werk')
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            res.redirect('/signup');
        });
    });

//PUT to update user's profile

//POST method to .findOne wer where username: username

//GET logout to stop session

//GET all data for one user

module.exports = router;

const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

//create new user in DB
router.post('/signup', (req, res) => {
    Users.create({
        first_name: req.body.inputFirstName,
        last_name: req.body.inputLastName,
        username: req.body.inputUsername,
        email: req.body.inputEmail,
        password: req.body.inputPassword,
        zip_code: req.body.inputZipCode
    }).then(user => {
        console.log(user)
    }).catch(err => console.log(err));
});

//post method to .findOne wer where username: username

//GET logout to stop session

//GET all data for one user
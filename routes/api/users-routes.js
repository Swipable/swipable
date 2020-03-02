const express = require('express').Router();
const usersController = require('../../controllers/usersController');
const db = require('../../models');

/*
  USER ROUTES
*/

module.exports = function(app) {
    // app.get('/api/get/signup', (req, res, next) => {
    //     console.log('get method for signup')
    //     res.json(data);
    // });

app.route('/signup')
    .get(usersController.findAll)
    .post(usersController.create)

//LOGIN ROUTING -- CURRENTLY NOT IMPLEMENTED
app.route('/login')
    .get(usersController.findOne)


/*
  RESTAURANT API CALLS
*/
    app.get("/api/restaurants", (req, res) => {
        console.log("Hitting the correct route.");
        axios
            .get("https://api.yelp.com/v3/businesses/search?location=chicago&limit=50", 
            { 'headers': { 'Authorization': 'Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx',
           'Access-Control-Allow-Origin': '*'} } )
           .then((response) => {
            console.log("Yelp response received");
            res.json(response.data);
           //   console.log(response.data)
           }).catch(e => console.log(e));
      });
   }


/*
    app.post('/api/signup', (req, res) => {
        db.Users.create({
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
            res.json(user)
        })
        .catch(error => {
            console.log(error)
          //  res.redirect('/signup');
        });
    });

    */


// //PUT to update user's profile

// //POST method to .findOne wer where username: username

// //GET logout to stop session

// //GET all data for one user

// module.exports = router;
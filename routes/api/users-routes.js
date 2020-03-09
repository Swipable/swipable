const express = require('express').Router();
const usersController = require('../../controllers/usersController');
const db = require('../../models');
const passport = require('../../passport/localStrategy.js');
const isAuthenticated = require('../../passport/middleware/isAuthenticated');


/*
  USER ROUTES
*/

module.exports = function (app) {

  app.route('/api/signup')
    .get(usersController.findAll)
    .post(usersController.create)
    

  //LOGIN ROUTING -- CURRENTLY NOT IMPLEMENTED

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    console.log('login in user-routes hit')
    let { username, password } = req.body;
    console.log({ username, password })

    res.send(req.user);

    //    db.Users
    //     .findOne({ where: { username: username }})
    //     .then((data) => {
    //       let user = data;
    //       console.log({ user })
    //       if (user) {
    //         console.log('got user data back from findOne call')
    //         if (user.validPassword(password, user.password)) {
    //           console.log('we have a valid user')
    //           req.session.user = user.dataValues;
    //           console.log(req.session)
    //           res.json(user)
    //           //  send response back telling front end that we have a valid user
    //           return;
    //         }
    //       } else if (!user) {
    //         console.log('no user')
    //         res.json('no user found')
    //         return;
    //       } else {
    //         console.log("no user exists")
    //         res.json('no user exists')
    //         return;
    //       }
                
                
    //    })
    //     .catch(err => console.log(err));
    // });

  });

  // //GET logout to stop session
  app.get('/logout', (req, res) => {
    req.logOut();
    console.log('logout hit')
    res.send(req);
  })


}

// //PUT to update user's profile

// //POST method to .findOne wer where username: username



// //GET all data for one user

// module.exports = router
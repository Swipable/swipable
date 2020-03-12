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
    

  //LOGIN ROUTING

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    console.log('login in user-routes hit')
    let { username, password } = req.body;
    // console.log({ username, password })
    // console.log(req.session.passport.user.dataValues.id)
    return res.send(req.user);
  });

  // //GET logout to stop session
  app.get('/logout', (req, res) => {
    req.logOut();
    // console.log('logout hit')
    res.send(req);
  })


}
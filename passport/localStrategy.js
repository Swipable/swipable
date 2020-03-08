const passport = require("passport")
  , LocalStrategy = require('passport-local').Strategy
  , db = require('../models');


passport.use(
  new LocalStrategy(
    // {
    //   usernameField: 'username',
    //   passwordField: 'password',
    //   passReqToCallback: true
    // },
    function (username, password, done) {
    db.Users.findOne({
      where: { username: username }
    }
    ).then(function (dbUser) {
      // if (dbUser) {
      //   console.log('found')
      //   return done(null, dbUser)
      // }
      if (!dbUser) {
        
        return done(null, false, {
          message: 'user not found'
        });
      } else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect pass'
        })
      // } else if (err) {
      //   return done(err)
      }
      
      return done(null, dbUser);
      

    });
    })
);
  
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
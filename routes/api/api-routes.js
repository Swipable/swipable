const axios = require("axios");
var db = require("../../models");
const isAuthenticated = require("../../passport/middleware/isAuthenticated");
const checkOrCreate = require('../helpers');
//const Sequelize = require('../../models/index')
const Sequelize = require('sequelize')

//michelle's change

module.exports = function(app, user) {
  app.get("/api/restaurants", (req, res) => {
    const price = req.query.price || "2";
    const categories = req.query.category || "";
    const location = req.query.location || user.zip_code;
    const transactions = req.query.location || "";

    axios
      .get("https://api.yelp.com/v3/businesses/search?&limit=50", {
        headers: {
          Authorization: `Bearer ${ process.env.TOKEN}`
        },
        params: {
          location,
          categories,
          hours: "is_open_now",
          rating: "5",
          price,
          transactions,
        }
      })
      .then(response => {
        console.log("Yelp response received");
        res.json(response.data);
        //   console.log(response.data)
      })
      .catch(e => {
        console.log(e.message);
      });
  });

  // Getting Team details from db
  app.get("/api/get/otheruserprofilefromdb", function(req, res) {
    db.Users.findAll({}).then(function(data) {
      //   console.log(data);
      res.json(data);
    });
  });

  // getting user profile details from db
  app.get("/api/get/userprofile/:username", function(req, res) {
    db.Users.findOne({
      where: {
        //needs updation with implementation of authentication
        username: req.params.username
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //get favorites list from db
  // app.get("/api/get/favoritesfromdb", function(req, res) {
  //   db.Favorites.findAll({}).then(function(data) {
  //     res.json(data);
  //   });
  // });

  // Deb changes:

  app.get("/api/get/favoritesfromdb", function(req, res) {
    const userID = req.session.passport.user.id;
    db.Favorites.findAll({
      where: {
        UserId: userID
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //add to favourites on swipe right
  app.post("/api/post/favoritestodb", (req, res) => {
    console.log(req.session.passport.user.id)
    const restName = req.body.name
    const loggedIn = req.session.passport.user.id

    //  FUNCTION TO CHECK IF THERE IS ALREADY AN ENTRY IN DB ASSOCIATED WITH LOGGED IN USER'S ID

    checkOrCreate(db.Favorites, Sequelize.and
      ([
        {
          name: restName,
          UserID: loggedIn
        }
      ])
      
      , {
        name: req.body.name,
        rating: req.body.rating,
        price: req.body.price,
        image: req.body.image,
        link: req.body.link,
        is_closed: req.body.is_closed,
        restaurant_id: req.body.restaurant_id,
        display_phone: req.body.display_phone,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        distance: req.body.distance,
        UserId: req.session.passport.user.id
      })
      .then(function (favorite) {
        if (!favorite.created) {
          //console.log('if not favorite created');
          const restName = favorite.found.name
          db.Favorites.findAndCountAll({
            where : { name: restName }
          }).then(count => {;
            //console.log(count.count)
            if (count.count === 1) {
              //console.log('only one person saved to favorites')
              return res.json(null);
            } else if (count.count > 1) {
              //console.log('more than one person saved to db')
              const others = count.count - 1;
              return res.json({ count: others, name: restName });
            }
            
          })
          //return res.json(favorite);
        } else if (favorite) {
          db.Feeds.create({
            user_id: req.session.passport.user.id,
            username: req.session.passport.user.username,
            activity_type: "added to favourites",
            restaurant_name: req.body.name,
            image: req.body.image,
            link: req.body.link
          }).then(feeds => {
            // console.log('added to Feeds')
            return res.json({ favorite: favorite, feeds: feeds });
          });
        }
      });
  });

  app.delete("/api/delete/favorite/:id", (req, res) => {
    // console.log(req.params.id);
    db.Favorites.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      db.Favorites.destroy({
        where: {
          id: data.id
        }
      }).then(function(response) {
        db.Feeds.create({
          user_id: req.session.passport.user.id,
          username: req.session.passport.user.username,
          activity_type: "removed from favourites",
          restaurant_name: data.name,
          image: req.body.image,
          link: req.body.link
                }).then(feeds => {
          res.json({ response: response, feeds: feeds });
        });
      });
    });
  });

  app.get("/api/get/feedsfromdb", function(req, res) {
    db.Feeds.findAll({ order: [["id", "DESC"]], limit: 10 }).then(function(
      data
    ) {
      res.json(data);
    });
  });

  app.put("/api/put/userprofile/:id", (req, res) => {
    // console.log("req body");
    // console.log(req.body);
    db.Users.update(req.body, {
      where: { id: req.params.id }
      // returning: true
    }).then(function(response) {
      // console.log("updated user");
      // console.log(response);
      res.json(response);
    }),
      function(err) {
        console.log(err);
      };
  });
  };
  

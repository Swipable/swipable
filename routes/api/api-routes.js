const axios = require("axios");
var db = require("../../models");
const isAuthenticated = require("../../passport/middleware/isAuthenticated");

//michelle's change

module.exports = function(app) {
  app.get("/api/restaurants", (req, res) => {
    const price = req.query.price || "2";
    const categories = req.query.category || "";
    const location = req.query.location || "usa";
    const transactions = req.query.location || "";

    axios
      .get("https://api.yelp.com/v3/businesses/search?&limit=50", {
        headers: {
          Authorization:
            "Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx",
          "Access-Control-Allow-Origin": "*"
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
    console.log(req.session.passport.user.id);
    db.Favorites.create({
      name: req.body.name,
      rating: req.body.rating,
      price: req.body.price,
      image: req.body.image,
      link: req.body.link,
      is_closed: req.body.is_closed,
      restaurant_id: req.body.restaurant_id,
      display_phone: req.body.display_phone,
      //  display_address: req.body.display_address,
      // category: req.body.categories,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      distance: req.body.distance,
      //  transactions: req.body.transactions,
      //Deb's change
      UserId: req.session.passport.user.id
    }).then(function(favorite) {
      db.Feeds.create({
        user_id: req.session.passport.user.id,
        username: req.session.passport.user.username,
        activity_type: "added to favourites",
        restaurant_name: req.body.name
        // favourites_id: req.body.name
      }).then(feeds => {
        res.json({ favorite: favorite, feeds: feeds });
      });
    });
  });

  app.delete("/api/delete/favorite/:id", (req, res) => {
    console.log(req.params.id);
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
          restaurant_name: data.name
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
    console.log("req body");
    console.log(req.body);
    db.Users.update(req.body, {
      where: { id: req.params.id }
      // returning: true
    }).then(function(response) {
      console.log("updated user");
      console.log(response);
      res.json(response);
    }),
      function(err) {
        console.log(err);
      };
  });
};

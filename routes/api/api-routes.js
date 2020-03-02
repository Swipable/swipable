const axios = require("axios");
var db = require("../../models");

//michelle's change
module.exports = function(app) {
  app.get("/api/restaurants", (req, res) => {
    console.log("Hitting the correct route.");
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?location=chicago&limit=50",
        {
          headers: {
            Authorization:
              "Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response => {
        console.log("Yelp response received");
        res.json(response.data);
        //   console.log(response.data)
      })
      .catch(e => console.log(e));
  });

  //debra's change
  app.get("/", (req, res) => {
    console.log("root route hit");
    res.redirect("login");
  });

  //poorva's change

  // Getting Team details from db
  app.get("/api/get/otheruserprofilefromdb", function(req, res) {
    db.Users.findAll({}).then(function(data) {
      //   console.log(data);
      res.json(data);
    });
  });

  // getting user profile details from db
  app.get("/api/get/userprofile", function(req, res) {
    db.Users.findOne({
      where: {
        //needs updation with implementation of authentication
        username: "adumbledor"
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/get/favoritesfromdb", function(req, res) {
    db.Favorites.findAll({}).then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

  app.post("/api/post/favoritestodb", (req, res) => {
    db.Favorites.create({
      name: req.body.name,
      rating: req.body.rating,
      price: req.body.price,
      image: req.body.image,
      link: req.body.link,
      is_closed: req.body.is_closed,
      restaurant_id: req.body.restaurant_id,
      display_phone: req.body.display_phone,
      // display_address: req.body.location.display_address,
      // category: req.body.categories,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      distance: req.body.distance
      // transactions: req.body.transactions
    }).then(function(dbUsers) {
      res.json(dbUsers);
      console.log("db users send");
    });
  });
};

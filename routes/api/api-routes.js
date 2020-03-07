const axios = require("axios");
var db = require("../../models");

//michelle's change

module.exports = function(app) {
  app.get("/api/restaurants", (req, res) => {
    const price = req.query.price || "2";
    const categories = req.query.category || "";
    const location = req.query.location || "usa";

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
          transactions: "delivery"
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
        username: "poorva"
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //get favorites list from db
  app.get("/api/get/favoritesfromdb", function(req, res) {
    db.Favorites.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  //add to favourites on swipe right
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
      display_address: req.body.display_address,
      // category: req.body.categories,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      distance: req.body.distance,
      transactions: req.body.transactions
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.delete("/api/delete/favorite/:id", (req, res) => {
    console.log(req.params.id);
    db.Favorites.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(response) {
      res.json(response);
    }),
      function(err) {
        console.log(err);
      };
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

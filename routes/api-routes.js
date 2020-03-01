const axios = require("axios");
var db = require("../models");

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

  //    app.get("/stuff", (req, res) => {
  //        console.log("Stuff received")
  //    })

  app.get("/api/get/otheruserprofilefromdb", function(req, res) {
    db.Users.findAll({}).then(function(data) {
      console.log(data);
      res.json(data);
      // res.render("team", { users: data });
    });
  });

  app.get("/api/get/userprofile", function(req, res) {
    db.Users.findOne({
      where: {
        username: "adumbledor"
      }
    }).then(function(data) {
      console.log(data);
      res.json(data);
      // res.render("team", { users: data });
    });
  });
  // axios.get('/api/get/otheruserprofilefromdb',
  // {params: {username: username}} )
  // .then(res =>  setProfile({...res.data} ))
  //  .catch(function (error) {
  //  console.log(error);
  // })
};

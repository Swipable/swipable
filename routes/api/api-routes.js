const axios = require("axios");
var db = require("../../models");

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


  app.get('/', (req, res) => {
    console.log('root route hit')
    res.redirect('login');
  })


  //    app.get("/stuff", (req, res) => {
  //        console.log("Stuff received")
  //    })

  /* TESTING OUT ROUTES W/DB INTERACTION
  app.get("/api/get/otheruserprofilefromdb", function(req, res) {
    db.Users.findAll({}).then(function(data) {
      console.log(data);
      res.json(data);
      // res.render("team", { users: data });
    });
  });
  app.post('/api/post/posttodb', (req, res) => {
    db.Users.create(req.body)
    .then(function(data){
      console.log(data)
    })
  })
{
             first_name: req.body.inputFirstName,
             last_name: req.body.inputLastName,
             username: req.body.inputUsername,
             email: req.body.inputEmail,
             password: req.body.inputPassword,
             zip_code: req.body.inputZipCode
         }
*/


  // axios.get('/api/get/otheruserprofilefromdb',
  // {params: {username: username}} )
  // .then(res =>  setProfile({...res.data} ))
  //  .catch(function (error) {
  //  console.log(error);
  // })
};
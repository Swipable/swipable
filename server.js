const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require("morgan");
// const APIroutes = require('./routes/api-routes');
const cors = require('cors');
const bodyParser = require('body-parser');

//local files
const sequelize = require('./config/database');
const db = require('./models');

//req package to hide environment variables
require('dotenv').config()
// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Define middleware here
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
app.get("/api/restaurants", (req, res) => {
    console.log("Hitting the correct route.");
    axios
        .get("https://api.yelp.com/v3/businesses/search?location=chicago", 
        { 'headers': { 'Authorization': 'Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx',
       'Access-Control-Allow-Origin': '*'} } )
       .then((response) => {
        console.log("Yelp response received");
        res.json(response.data);
        // console.log(response.data)
       }).catch(e => console.log(e));
    // res.json(response)
  });

  module.exports = APIroutes;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync({force: false}).then(()=> {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});



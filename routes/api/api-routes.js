// import React, { useEffect, useState } from "react";
// import SearchBar from "../client/src/components/SearchBar"

const axios = require('axios');

module.exports = function(app //,SearchBar
   ) {
  
   
app.get("/api/restaurants", (req, res) => {
    console.log("Hitting the correct route.");
    axios
    .get(
       "https://api.yelp.com/v3/businesses/search?&limit=50",
       {
         headers: {
           Authorization:
             "Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx",
           "Access-Control-Allow-Origin": "*"
         },
         params: {
           location: "chicago",
           categories: 'italian',
           hours: "is_open_now",
           rating: '5',
           price: '2',
           transactions: 'delivery'
         }
       }
     )
       .then((response) => {
        console.log("Yelp response received");
        res.json(response.data);
       //   console.log(response.data)
       }).catch(e => console.log(e));
  });

  app.get("/stuff", (req, res) => {
      console.log("Stuff received")
  })
}
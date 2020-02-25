// const axios = require('axios');

// app.get("/api/restaurants", (req, res) => {
//     console.log("Hitting the correct route.");
//     axios
//         .get("https://api.yelp.com/v3/businesses/search?location=chicago", 
//         { 'headers': { 'Authorization': 'Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx',
//        'Access-Control-Allow-Origin': '*'} } )
//        .then((response) => {
//         console.log("Yelp response received");
//         res.json(response.data);
//         // console.log(response.data)
//        }).catch(e => console.log(e));
//     // res.json(response)
//   });

//   module.exports = APIroutes;
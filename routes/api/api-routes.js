const axios = require('axios');

module.exports = function(app //,SearchBar
   ) {
  
   
app.get("/api/restaurants", (req, res) => {
    const price = req.query.price ? req.query.price : 'italian';
    const categories = req.query.category ? req.query.category : '2';

    axios.get(
       "https://api.yelp.com/v3/businesses/search?&limit=50",
       {
         headers: {
           Authorization:
             "Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx",
           "Access-Control-Allow-Origin": "*"
         },
         params: {
           location: "chicago",
           categories,
           hours: "is_open_now",
           rating: '5',
           price,
           transactions: 'delivery'
         }
       }
     )
       .then((response) => {
        console.log("Yelp response received");
        res.json(response.data);
       //   console.log(response.data)
       }).catch(e => {
           console.log(e.message)
    });
  });

  app.get("/stuff", (req, res) => {
      console.log("Stuff received")
  })
}
import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchRestaurants: function() {
    return axios
      .get("https://api.yelp.com/v3/businesses/search?location=chicago", 
      { 'headers': { 'Authorization': 'Bearer Y9M86BBstf-ATStxC6Y9r0Tq-0A1JDp5xGMAFki4cFeW8TgBeznAmQtOuFAPqtAgZsEnI2GfBQPJ4FelB7hyc3Ovb4DDVgoUgajUXr0NTHpydudR54iU2gm0AkJMXnYx',
     'Access-Control-Allow-Origin': '*'} } )
      .then(res => {
        const restaurants = res.data;
        return restaurants.map(restaurants => {
          return {
            name: restaurants.name,
            image: restaurants.image_url,
            restaurantUrl: restaurants.image_url
          };
        });
      });
  }
};

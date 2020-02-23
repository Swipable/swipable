import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchRestaurants: function() {
    return axios
      .get("http://localhost:3000/restaurants")
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

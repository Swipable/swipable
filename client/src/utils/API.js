import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchRestaurants: function() {
    return axios.get("api/restaurants").then(res => {
      const restaurants = res.data.businesses;
      return restaurants.map(restaurant => {
        return {
          name: restaurant.name,
          rating: restaurant.rating,
          price: restaurant.price,
          image: restaurant.image_url,
          link: restaurant.url,
          closed: restaurant.is_closed,
          id: restaurant.id,
          display_phone: restaurant.phone,
          display_address: restaurant.location.display_address,
          catagory: restaurant.catagories
        };
      });
    });
  },
  fetchUsers: function() {
    return axios
      .get("/api/get/otheruserprofilefromdb", {
        // params: { username: username }
      })
      .then(res => {
        console.log("Res.data");
        console.log(res.data);
        const users = res.data;
        return users.map(user => {
          return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username
          };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

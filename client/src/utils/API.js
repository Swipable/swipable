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
          is_closed: restaurant.is_closed,
          restaurant_id: restaurant.id,
          display_phone: restaurant.phone,
          //display_address: restaurant.location.display_address,
          //category: restaurant.categories,
          latitude: restaurant.coordinates.latitude,
          longitude: restaurant.coordinates.longitude,
          distance: restaurant.distance
          //transactions: restaurant.transactions
        };
      });
    });
  },

  //poorva's change
  fetchUsers: function() {
    return axios
      .get("/api/get/otheruserprofilefromdb", {
        // params: { username: username }
      })
      .then(res => {
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
  },

  fetchFavorites: function() {
    return axios
      .get("/api/get/favoritesfromdb", {})
      .then(res => {
        // console.log("Res.data");
        // console.log(res.data);
        const favorites = res.data;
        return favorites.map(favorite => {
          return {
            id: favorite.id,
            name: favorite.name,
            image: favorite.image,
            rating: favorite.rating,
            price: favorite.price,
            display_phone: favorite.display_phone,
            distance: favorite.distance,
            key: favorite.id
          };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //debra's change
  saveUser: userData => {
    return axios.post("/signup", userData);
  },
  getUsers: () => {
    return axios.get("/users");
  },
  getOneUser: userData => {
    return axios.get("/login", userData);
  }
};

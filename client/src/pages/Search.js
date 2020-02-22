import React, { useEffect, useState } from "react";
import "../components/Form/form.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import axios from "axios";

function Search() {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  // When the component mounts, a call will be made to get random restaurants.
  useEffect(() => {
   const restaurant = loadRestaurants();//axios catch request to an express route before loadRestaurants(); in backend express route make the call to the api
  }, []);

  function nextRestaurant(restaurantIndex) {
    // Ensure that the restaurant index stays within our range of restaurants
    if (restaurantIndex >= restaurants.length) {
      restaurantIndex = 0;
    }
    setRestaurant(restaurants[restaurantIndex]);
    setRestaurantIndex(restaurantIndex);
  }

  function previousRestaurant(restaurantIndex) {
    // Ensure that the Restaurant index stays within our range of Restaurants
    if (restaurantIndex < 0) {
      restaurantIndex = restaurants.length - 1;
    }
    setRestaurant(restaurants[restaurantIndex]);
    setRestaurantIndex(restaurantIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newRestaurantIndex = restaurantIndex + 1;
      nextRestaurant(newRestaurantIndex);
    } else {
      const newRestaurantIndex = restaurantIndex - 1;
      previousRestaurant(newRestaurantIndex);
    }
  }

  function loadRestaurants() {
    console.log("calling the right function");
    axios.post("http://localhost:3001/restaurants", {})
    .then((restaurants) => {
        console.log(restaurants.businesses[0].name);
        return restaurants;
    })
    .catch(err => console.log(err));
    // API.fetchRestaurants()
    //   .then(restaurants => {
    //     setRestaurants(restaurants);
    //     setRestaurant(restaurants[0]);
    //   })
    //   .catch(err => console.log(err));
  }

  return (
    <div>
      <Header/>
      <Row>
        <CardContainer
          name={restaurant.name}
          image={restaurant.image}
          profileUrl={restaurant.profileUrl}
          handleBtnClick={handleBtnClick}
        />
      </Row>
      <Footer/>
    </div>
  );
}

export default Search;

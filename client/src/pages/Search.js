import React, { useEffect, useState } from "react";
import "../components/Form/form.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";
import API from "../utils/API";
import SearchBar from "../components/SearchBar/searchbar";
import Dropdown from "../components/Dropdown/dropdown";
import RestaurantCard from "../components/RestaurantCard/restaurantcard";

function Search() {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  // When the component mounts, a call will be made to get random restaurants.
  useEffect(() => {
   loadRestaurants();//axios catch request to an express route before loadRestaurants(); in backend express route make the call to the api
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
    // console.log("calling the right function");
    API.fetchRestaurants()
    .then((restaurants) => {
      console.log(restaurants);
        setRestaurants(restaurants);
        setRestaurant(restaurants[0])
        return restaurants;
    })
    .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Header></Header>
      <div className="filter-container">
        <div className="row d-inline-flex">
        <SearchBar></SearchBar>
          </div>
          <br></br>
          <div className="row d-inline-flex">
          <div className="col-lg-3">
          <Dropdown></Dropdown>
          </div>
          <div className="col-lg-3">
            <Dropdown></Dropdown>
          </div>
          <div className="col-lg-3">
            <Dropdown></Dropdown>
          </div>
          <div className="col-lg-3">
            <Dropdown></Dropdown>
          </div>
        </div>
      </div>
      <RestaurantCard 
      name={restaurant.name} 
      rating={restaurant.rating} 
      price={restaurant.price}
      link={restaurant.link}
      image={restaurant.image}
      handleBtnClick={handleBtnClick} />
    <Footer></Footer>
      </Wrapper >
    );
}

export default Search;

  
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Form/form.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";

function Search() {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantIndex, setRestaurantIndex] = useState(0);
  const [price, setPrice] = React.useState('2');
  const [category, setCategory] = React.useState('');
  const categories = ["bbq", "burgers", "cajun", "chinese", "french", "greek", "halal", "italian"]

  // When the component mounts, a call will be made to get random restaurants.
  useEffect(() => {
    if (restaurants.length === 0) {
      loadRestaurants();
    }
  });

  useEffect(() => {
    loadRestaurants();
  }, [price, category]);

  const nextRestaurant = (restaurantIndex) => {
    // Ensure that the restaurant index stays within our range of restaurants
    if (restaurantIndex >= restaurants.length) {
      restaurantIndex = 0;
    }

    axios
      .post("/api/post/favoritestodb", restaurants[restaurantIndex])
      .then(res => console.log(res.data));
    setRestaurant(restaurants[restaurantIndex]);
    setRestaurantIndex(restaurantIndex);
  }

  const previousRestaurant = (restaurantIndex) => {
    // Ensure that the Restaurant index stays within our range of Restaurants
    if (restaurantIndex < 0) {
      restaurantIndex = restaurants.length - 1;
    }
    setRestaurant(restaurants[restaurantIndex]);
    setRestaurantIndex(restaurantIndex);
  }

  const handleBtnClick = (event) => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newRestaurantIndex = restaurantIndex + 1;
      nextRestaurant(newRestaurantIndex);
      console.log(restaurantIndex)
    } else {
      const newRestaurantIndex = restaurantIndex + 1;
      previousRestaurant(newRestaurantIndex);
      console.log(restaurantIndex)
    }

  }

  const loadRestaurants = () => {
    API.fetchRestaurants(price, category)
      .then(r => {
        setRestaurants(r);
        setRestaurant(r[0]);
        return restaurants;
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <div className="filter-container">
        <div className="row d-inline-flex">
          <SearchBar></SearchBar>
        </div>
        <br/>
        <div className="row d-inline-flex">
          <div className="col-lg-3">
            <select name="price" value={price} onChange={event => setPrice(event.target.value)}>
              <option value=""> Price </option>
              <option value="1"> $ </option>
              <option value="2"> $$ </option>
              <option value="3"> $$$ </option>
              <option value="4"> $$$$ </option>
            </select>
          </div>
          <div className="col-lg-3">
            <select name="category" value={category} onChange={event => setCategory(event.target.value)}>
              {categories.map((c) => {
                return (<option value={c}> {c} </option>);
              })}
            </select>
          </div>
        </div>
      </div>
      <RestaurantCard
        name={restaurant.name}
        rating={restaurant.rating}
        price={restaurant.price}
        link={restaurant.link}
        image={restaurant.image}
        handleBtnClick={handleBtnClick}
      />
    </Wrapper>
  );
}

export default Search;

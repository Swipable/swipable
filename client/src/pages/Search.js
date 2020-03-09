import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../components/Form/form.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import UserContext from "../context/UserContext";

function Search() {
  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [location, setInput] = useState("");
  const [restaurantIndex, setRestaurantIndex] = useState(0);
  const { isLoggedIn, user } = useContext(UserContext);
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("Categories");
  const categories = [
    "Categories",
    "bbq",
    "burgers",
    "cajun",
    "chinese",
    "french",
    "greek",
    "halal",
    "italian"
  ];

  useEffect(() => {
    loadRestaurants();
  }, [price, category, location]);

  const nextRestaurant = restaurantIndex => {
    // Ensure that the restaurant index stays within our range of restaurants
    if (restaurantIndex <= 49) {
      axios
        .post("/api/post/favoritestodb", restaurants[restaurantIndex - 1])
        .then(res =>
          alert(res.data.favorite.name + " has been added to your favorites <3")
        )
        .then(setRestaurant(restaurants[restaurantIndex]))
        .then(setRestaurantIndex(restaurantIndex + 1));
    } else {
      axios
        .post("/api/post/favoritestodb", restaurants[restaurantIndex - 1])
        .then(res =>
          alert(res.data.favorite.name + " has been added to your favorites <3")
        )
        .then(alert("There are no more results! Please refine your search."));
    }
  };

  const dislikeRestaurant = restaurantIndex => {
    if (restaurantIndex <= 49) {
      setRestaurant(restaurants[restaurantIndex]);
      setRestaurantIndex(restaurantIndex);
    } else {
      alert("There are no more results! Please refine your search.");
    }
  };

  const handleBtnClick = event => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newRestaurantIndex = restaurantIndex + 1;
      nextRestaurant(newRestaurantIndex);
      console.log(restaurantIndex);
    } else {
      const newRestaurantIndex = restaurantIndex + 1;
      dislikeRestaurant(newRestaurantIndex);
    }
  };

  const loadRestaurants = e => {
    if (e) {
      e.preventDefault();
    }
    console.log(location);
    API.fetchRestaurants(price, category, location)
      .then(r => {
        if (r[0].name !== "undefined") {
          console.log(r[0].name);
          setRestaurants(r);
          setRestaurant(r[0]);
          console.log(r);
          return restaurants;
        }
      })
      .catch(err =>
        alert("Sorry, there are no results! Please change your search.")
      );
  };

  return (
    <Wrapper>
      <h1 className="d-flex justify-content-center">
        Welcome {user.first_name}!{" "}
      </h1>

      <br></br>

      <div className="d-flex justify-content-center">
        <form onSubmit={loadRestaurants}>
          {/* <div className="row d-inline-flex"> */}
          <SearchBar location={location} setInput={setInput}></SearchBar>
          {/* </div> */}
          <br />
          <div className="d-flex justify-content-center">
            <div className="col-lg-3">
              <select
                name="price"
                value={price}
                onChange={event => setPrice(event.target.value)}
              >
                <option value=""> Price </option>
                <option value="1"> $ </option>
                <option value="2"> $$ </option>
                <option value="3"> $$$ </option>
                <option value="4"> $$$$ </option>
              </select>
            </div>
            <div className="col-lg-3">
              <select
                name="category"
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                {categories.map(c => {
                  return <option value={c}> {c} </option>;
                })}
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center">
        <RestaurantCard
          name={restaurant.name}
          rating={restaurant.rating}
          price={restaurant.price}
          link={restaurant.link}
          image={restaurant.image}
          handleBtnClick={handleBtnClick}
        />
      </div>
    </Wrapper>
  );
}

export default Search;

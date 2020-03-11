import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../components/Form/form.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import UserContext from "../context/UserContext";
import Spinner from "../components/Spinner";

function Search() {
  const { isLoggedin, user, loading, setLoading } = useContext(UserContext);

  const [restaurant, setRestaurant] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [location, setInput] = useState(`${user.zip_code}`);
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  const [transactions, setTransactions] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const categories = [
    "Category",
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
    setLoading(true);
    loadRestaurants();
  }, [price, category, location, transactions, user.zip_code]);

  const nextRestaurant = restaurantIndex => {
    // Ensure that the restaurant index stays within our range of restaurants
    if (restaurantIndex < restaurants.length) {

      axios
        .post("/api/post/favoritestodb", restaurants[restaurantIndex - 1])
        .then((res) => {
          console.log(res)
          if (res.data === null) {
            //MODAL POPUP HERE
            console.log('Search page - no response received, already in DB')
          } else {
            //MODAL POPUP HERE
            console.log('Search page - was added to DB')
          }
        })
        .then(setRestaurant(restaurants[restaurantIndex]))
        .then(setRestaurantIndex(restaurantIndex));
    } else {
      axios
        .post("/api/post/favoritestodb", restaurants[restaurantIndex - 1])
        .then((res) => {
          alert(res.data.favorite.name + " has been added to your favorites <3")
        })
      }
  };

  const dislikeRestaurant = restaurantIndex => {
    
    if (restaurantIndex < restaurants.length) {
      setRestaurant(restaurants[restaurantIndex]);
      setRestaurantIndex(restaurantIndex);
      console.log(restaurantIndex);
    } else {
      alert("There are no more results! Please refine your search.");
    }
  };

  const handleBtnClick = event => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newRestaurantIndex = restaurantIndex +1;
      nextRestaurant(newRestaurantIndex, restaurants.length);
      console.log(restaurantIndex);
    } else {
      const newRestaurantIndex = restaurantIndex +1;
      dislikeRestaurant(newRestaurantIndex, restaurants.length);
    }
  };

  const loadRestaurants = e => {

    if (e) {
      e.preventDefault();
    }

    API.fetchRestaurants(price, category, location, user.zip_code, transactions)
      .then(r => {
        setLoading(false);
        if (r[0].name !== "undefined") {
          console.log(r[0].name);
          setRestaurants(r);
          setRestaurant(r[0]);
          setRestaurantIndex(0)
          console.log(r.length);
          return r;

        }
      })
      .catch((err) => {
          alert("Sorry, there are no results! Please change your search.")
        });
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

          <div className="dropdown">
            <select
              className="dropdown-content"
              name="category"
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              {categories.map(c => {
                return <option value={c}> {c} </option>;
              })}
            </select>

            <select
              className="dropdown-content"
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

            <select
              className="dropdown-content"
              name="transactions"
              value={transactions}
              onChange={event => setTransactions(event.target.value)}
            >
              <option value=""> Pickup/Delivery </option>
              <option value="delivery"> Delivery </option>
              <option value="pickup"> Pickup </option>
            </select>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center">
        {loading ? [<Spinner></Spinner>] : 
        <RestaurantCard
          name={restaurant.name}
          rating={restaurant.rating}
          price={restaurant.price}
          link={restaurant.link}
          image={restaurant.image}
          handleBtnClick={handleBtnClick}
        />}
      </div>
    </Wrapper>
  );
}

export default Search;

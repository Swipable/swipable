import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
// import "../components/Form/form.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import UserContext from "../context/UserContext";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
// import CustomModal from "../components/CustomModal/custommodal";

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
    "Categories", "afghani", "african", "argentine", "austrian", "bbq", "pancakes", "british", "buffets", "burgers", "cafes", "cafeteria", "cajun", "caribbean", "chinese", "comfortfood", "cuban", "czech", "delis", "diners", "french", "german", "gluten_free", "greek", "halal", "honduran", "hotdog", "italian", "japanese", "ramen", "kebab", "korean", "kosher", "latin", "colombian", "mediterranean", "falafel", "mexican", "noodles", "persian", "pizza", "polish", "polynesian", "portuguese", "salad", "sandwiches", "seafood", "singaporean", "slovakian", "somali", "soulfood", "soup", "southern", "spanish", "steak", "sushi", "syrian", "taiwanese", "tapas", "tex-mex", "thai", "turkish", "ukrainian", "vegan", "vegetarian", "vietnamese", "waffles", "wraps"
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
        .then(res => {
          console.log(res.data)
          console.log(res.data.favorite)
          if (res.data.created === false) {
            toast.error("Psst... This restaurant is already in your favorites!", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
          } else if(res.data.favorite) {
            toast.success(`${res.data.favorite.item.name} was added to your favorites`, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
          }
        })
        .then(setRestaurant(restaurants[restaurantIndex]))
        .then(setRestaurantIndex(restaurantIndex));
    } else {
      axios
        .post("/api/post/favoritestodb", restaurants[restaurantIndex - 1])
        .then(res => {
            toast.success(
              `${res.data.favorite.name} was added to your favorites`,
              {
                position: toast.POSITION.BOTTOM_RIGHT
              }
            );
        });
    }
  };

  const dislikeRestaurant = restaurantIndex => {
    if (restaurantIndex < restaurants.length) {
      setRestaurant(restaurants[restaurantIndex]);
      setRestaurantIndex(restaurantIndex);
      console.log(restaurantIndex);
    } else {
        toast.error(
          "There are no more results! Please refine your search.",
          {
            position: toast.POSITION.BOTTOM_RIGHT
          }
        );
    }
  };

  const handleBtnClick = event => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newRestaurantIndex = restaurantIndex + 1;
      nextRestaurant(newRestaurantIndex, restaurants.length);
      console.log(restaurantIndex);
    } else {
      const newRestaurantIndex = restaurantIndex + 1;
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
          setRestaurantIndex(0);
          console.log(r.length);
          return r;
        }
      })
      .catch(err => {
        console.log(err);
          toast.error(
            "Sorry, there are no results! Please change your search.",
            {
              position: toast.POSITION.BOTTOM_RIGHT
            }
          );
      });
  };

  return (
    <Wrapper>
      <h1 className="d-flex justify-content-center header">
        Welcome {user.first_name}!{" "}
      </h1>

      <br></br>
      <div className="d-flex justify-content-center">
        <form onSubmit={loadRestaurants}>
          {/* <div className="row d-inline-flex"> */}
          <SearchBar setInput={setInput}></SearchBar>
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
        <br></br>
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

      <ToastContainer
        autoClose={3000}/>
    </Wrapper>
  );
}

export default Search;

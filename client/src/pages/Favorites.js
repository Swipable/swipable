import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import FavoriteCard from "../components/FavoriteCard/favouritecard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";
import Spinner from '../components/Spinner';

const Favorites = () => {

  const { loading, setLoading } = useContext(UserContext);

  // const [favorite, setFavorite] = useState({});
  const [favorites, setFavorites] = useState([]);
  // const [favoriteIndex, setfavoriteIndex] = useState(0);
  

  useEffect(() => {
    setLoading(true);
    loadFavorites();
  }, []);

  function loadFavorites() {
    API.fetchFavorites()
      .then(favorites => {
        setFavorites(favorites);
        setLoading(false);
        return favorites;
      })
      .catch(err => console.log(err));
    
  }

  function deleteFavorites(id) {
    return axios
      .delete(`/api/delete/favorite/${id}`)
      .then(res => {
        // console.log(res.data.response);
        if (res.data.response === 1) {
          loadFavorites();
        }
      })
      .catch(error => {
        throw error.res.data.response;
      });
  }

  function mapFavorites() {
    const isEmpty = !favorites.length;
    switch (loading) {
      case true:
        return <Spinner></Spinner>
    }
    switch (isEmpty) {
      case false:
        return (
          <div>
            {favorites.map(favorite => (
              <FavoriteCard
                deleteFavorites={deleteFavorites}
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
                rating={favorite.rating}
                price={favorite.price}
                display_phone={favorite.display_phone}
                distance={favorite.distance}
                key={favorite.id}
                link={favorite.link}
              />
            ))};
          </div>
        );
        case true:
        return <p className="noFav">You haven't saved any favorites yet! When you do, they will populate here.</p>
      default:
        return null;
    }
  }

  return (
    <Wrapper>

      <Title>Favorites</Title>
      { mapFavorites() }

    </Wrapper>
  );
};

export default Favorites;

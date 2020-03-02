import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import FavoriteCard from "../components/FavoriteCard/favouritecard";
import Title from "../components/Title";

const Favorites = () => {
  // const [favorite, setFavorite] = useState({});
  const [favorites, setFavorites] = useState([]);
  // const [favoriteIndex, setfavoriteIndex] = useState(0);

  useEffect(() => {
    loadFavorites();
  }, []);

  function loadFavorites() {
    API.fetchFavorites()
      .then(favorites => {
        setFavorites(favorites);
        return favorites;
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Favorites</Title>
      {favorites.map(favorite => (
        <FavoriteCard
          name={favorite.name}
          image={favorite.image}
          rating={favorite.rating}
          price={favorite.price}
          display_phone={favorite.display_phone}
          distance={favorite.distance}
          key={favorite.id}
        />
      ))}
    </Wrapper>
  );
};

export default Favorites;

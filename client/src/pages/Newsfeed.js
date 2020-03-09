import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API";
import FeedCard from "../components/FeedCard/FeedCard";
import Title from "../components/Title/index";

const Newsfeed = () => {
  // const [favorite, setFavorite] = useState({});
  const [feeds, setFeeds] = useState([]);
  // const [favoriteIndex, setfavoriteIndex] = useState(0);

  useEffect(() => {
    loadFeeds();
  }, []);

  function loadFeeds() {
    API.fetchFeeds()
      .then(feeds => {
        setFeeds(feeds);
        return feeds;
      })
      .catch(err => console.log(err));
  }

  // function deleteFavorites(id) {
  //   return axios
  //     .delete(`/api/delete/favorite/${id}`)
  //     .then(res => {
  //       console.log(res.data);
  //       if (res.data === 1) {
  //         loadFavorites();
  //       }
  //     })
  //     .catch(error => {
  //       throw error.res.data;
  //     });
  // }

  return (
    <Wrapper>
      <Title>News Feeds</Title>
      {feeds.map(feed => (
        <FeedCard
          //deleteFavorites={deleteFavorites}
          id={feed.id}
          user_id={feed.user_id}
          activity_type={feed.activity_type}
          //restaurant_id={feed.restaurant_id}
          key={feed.id}
        />
      ))}
    </Wrapper>
  );
};

export default Newsfeed;

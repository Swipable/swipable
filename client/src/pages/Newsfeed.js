import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API";
import FeedCard from "../components/FeedCard/FeedCard";
import Title from "../components/Title/index";

const Newsfeed = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    loadFeeds();
  }, []);

  function loadFeeds() {
    API.fetchFeeds()
      .then(feeds => {
        setFeeds(feeds);
        console.log(feeds);
        return feeds;
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Swipes near you!</Title>
      {feeds.map(feed => (
        <FeedCard
          id={feed.id}
          user_id={feed.user_id}
          username={feed.username}
          activity_type={feed.activity_type}
          restaurant_name={feed.restaurant_name}
          key={feed.id}
          link={feed.link}
          image={feed.image}
        />
      ))}
    </Wrapper>
  );
};

export default Newsfeed;
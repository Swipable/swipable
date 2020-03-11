import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API";
import FeedCard from "../components/FeedCard/FeedCard";
import Title from "../components/Title/index";
import UserContext from "../context/UserContext";
import Spinner from '../components/Spinner';

const Newsfeed = () => {
  const [feeds, setFeeds] = useState([]);
  const { loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    loadFeeds();
  }, []);

  function loadFeeds() {
    API.fetchFeeds()
      .then(feeds => {
        setFeeds(feeds);
        console.log(feeds);
        setLoading(false);
        return feeds;
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <Title>Swipes near you!</Title>
      <div>
        {loading ? [<Spinner></Spinner>] : null}
      </div>
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
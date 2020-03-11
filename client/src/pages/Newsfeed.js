import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API";
import FeedCard from "../components/FeedCard/FeedCard";
import Title from "../components/Title/index";
import UserContext from "../context/UserContext";
import Spinner from '../components/Spinner';

const Newsfeed = () => {
  const { loading, setLoading } = useContext(UserContext);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    setLoading(true);
    loadFeeds();
  }, []);

  async function loadFeeds() {
    await  API.fetchFeeds()
      .then(feeds => {
       setFeeds(feeds);
        console.log(feeds);
        setLoading(false);
        return feeds;
      })
      .catch(err => console.log(err));
  };

  function mapNewsfeed() {
    const isEmpty = !feeds.length;
    switch (loading) {
      case true:
        return <Spinner></Spinner>
    }
    switch (isEmpty) {
      case false:
        return (
        <div>
            {feeds.map(feed => (
              <FeedCard
                id={feed.id}
                user_id={feed.user_id}
                username={feed.username}
                activity_type={feed.activity_type}
                restaurant_name={feed.restaurant_name}
                key={feed.id}
              />
               ))
          }
        </div>)

      case true:
        return <p>You don't have any friends</p>
      default:
        return null;
    }
  }


  return (
    <Wrapper>
      <Title>Newsfeed</Title>
      { mapNewsfeed() }

    </Wrapper>
  );
};

export default Newsfeed;

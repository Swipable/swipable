import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import UserCard from "../components/UserCard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";

const Team = () => {
  // const [user, setUser] = useState({});
  const { isLoggedIn, user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);
  useEffect(() => {
    console.log({ isLoggedIn, user })
    loadUsers();
  }, []);

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        setUsers(users);
        return users;
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Other swipers near you!</Title>
      {users.map(user => (
        <UserCard
          username={user.username}
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
        />
      ))}
    </Wrapper>
  );
};

export default Team;

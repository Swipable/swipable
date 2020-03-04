import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import UserCard from "../components/UserCard";
import Title from "../components/Title";

const Team = () => {
  // const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);
  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        if (users.length > 0) {
          setUsers(users);
        }
        return users;
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Team</Title>
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

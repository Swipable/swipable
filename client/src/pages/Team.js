import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import UserCard from "../components/UserCard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";
import Spinner from '../components/Spinner';

const Team = () => {
  // const [user, setUser] = useState({});
  const { isLoggedIn, user, loading, setLoading } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);
  useEffect(() => {
    setLoading(true);
    console.log({ isLoggedIn, user })
    loadUsers();
  }, []);

  async function loadUsers() {
   await API.fetchUsers()
      .then(users => {
        setUsers(users);
        setLoading(false);
        return users;
      })
      .catch(err => console.log(err));
  }

  function mapTeam() {
    const isEmpty = !users.length;
    switch (loading) {
      case true:
        return <Spinner></Spinner>
    }
    switch (isEmpty) {
      case false:
        return (
          <div>
            {users.map(user => (
              <UserCard
                username={user.username}
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
              />
            ))}
          </div>)

      case true:
        return <p>You don't have any friends</p>
      default:
        return null;
    }
  }


  return (
    <Wrapper>
      <Title>Team</Title>
      {mapTeam()}
    </Wrapper>
  );
};

export default Team;

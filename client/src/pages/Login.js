import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { Input, FormBtn } from "../components/PageComponents";
import MainCard from "../components/MainCard";
import Title from "../components/Title";
import UserContext from '../context/UserContext';

const Login = props => {
  //set initial state
  const [formLogin, setFormLogin] = useState(null);

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  //executes loadUser and populates array w/res data
  useEffect(() => {
    console.log({ LoginPage: isLoggedIn }) //initially is false, true after correct credentials
    console.log(user); //Initially empty array, user data after correct credentials
  }, [user])            

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formLogin && formLogin.username && formLogin.password) {
      
      if (!formLogin.username || !formLogin.password) {
        console.log("no username or password entered");
      }
      API.getOneUser({
        username: formLogin.username,
        password: formLogin.password
      })
        .then(res => {
          if (res.data.username) {
            setUser(res.data)
            setIsLoggedIn(true)
            console.log("searched for one user")
            props.history.push("/search")
          } else if (!res.data.username) {
            alert('No user found - check credentials or sign up')
          } 
        })
        .catch(err => {
          if (err.response.status === 401) {
            alert('Incorrect credentials')
          } else {
            console.log(err)
          }
          console.log("Sucker. " + err.response.status)
        });
    } else {
      console.log("there is no formLogin info");
    }
  }

  return (
      <Wrapper>
        <Title>Login to find your perfect restaurant match!</Title>
        <MainCard
          form={
            <form>
              <Input
                label="Username"
                onChange={handleInputChange}
                id="username"
                name="username"
                placeholder="Username"
              />
              <Input
                label="Password"
                onChange={handleInputChange}
                id="password"
                name="password"
                placeholder="Password"
              />
              <FormBtn onClick={handleFormSubmit}>Log in</FormBtn>
              <Link to="/signup">Sign Up</Link>
            </form>
          }
        />
      </Wrapper>
  );
};

export default Login;

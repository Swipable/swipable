import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { Input, FormBtn } from "../components/PageComponents";
import FormCard from "../components/FormCard";
import Title from "../components/Title";
import UserContext from '../context/UserContext';
import Spinner from '../components/Spinner';
import { ToastContainer, toast } from "react-toastify";


const Login = props => {
  //set initial state
  const [formLogin, setFormLogin] = useState(null);
  const { user, setUser, isLoggedIn, setIsLoggedIn, loading, setLoading } = useContext(UserContext)

  //executes loadUser and populates array w/res data
  useEffect(() => {
    
  }, [user])            


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formLogin && formLogin.username && formLogin.password) {
      setLoading(true);
      if (!formLogin.username || !formLogin.password) {
        console.log("no username or password entered");
      }
      API.getOneUser({
        username: formLogin.username,
        password: formLogin.password
      })
        .then(res => {
          setLoading(false);
          if (res.data.username) {
            setUser(res.data);
            setIsLoggedIn(true);
            props.history.push("/search");
          } else if (!res.data.username) {
              toast.error(
                "Sorry, no user found with that username. Check your credentials or signup.",
                {
                  position: toast.POSITION.BOTTOM_RIGHT
                }
              );
          }
        })
        .catch(err => {
          if (err.response.status === 401) {
            setLoading(false);
              toast.error(
                "Incorrect credential. Please try again.",
                {
                  position: toast.POSITION.BOTTOM_RIGHT
                }
              );
          } else {
            console.log(err);
          }
          console.log("Sucker. " + err.response.status);
        });
    } else {
      toast.error(
        "Please enter your username and password",
        {
          position: toast.POSITION.BOTTOM_RIGHT
        }
      );
      console.log("there is no formLogin info");
    }
  }

  return (
    <Wrapper>
      <Title>Login to find your perfect restaurant match!</Title>
      <FormCard
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
            {loading ? (
              [<Spinner></Spinner>]
            ) : (
              <FormBtn onClick={handleFormSubmit}>Log in</FormBtn>
            )}
            <Link to="/signup">Sign Up</Link>
          </form>
        }
      />
      <ToastContainer autoClose={3000} />
    </Wrapper>
  );
};

export default Login;

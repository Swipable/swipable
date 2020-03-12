import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Wrapper from "../components/Wrapper";
import { Input, FormBtn } from "../components/PageComponents";
import API from "../utils/API";
import FormCard from "../components/FormCard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";

function Signup(props) {
  const { loading, setLoading } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [formObject, setFormObject] = useState({});

  //function to grab all users and console.log
  // function loadUsers() {
  //   API.getUsers()
  //     .then(res => setUser(res.data), console.log("loadUser call and API req"))
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    setLoading(true);
    event.preventDefault();
    if (formObject.inputUsername && formObject.inputPassword) {
      API.saveUser({
        first_name: formObject.inputFirstName,
        last_name: formObject.inputLastName,
        username: formObject.inputUsername,
        email: formObject.inputEmail,
        zip_code: formObject.inputZipCode,
        password: formObject.inputPassword
      })
        .then(res => {
          setLoading(false);
          if (res.data.username) {
            // console.log("user posted to DB");
            props.history.push('/login')
          } else if (res.data.created === false) {
          //Currently not working as expected
            {
              toast.error("There was a validation error during signup - Please choose another username", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
            }
          }
          else {
            toast.error("There was an error during signup", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
          }
      //    loadUsers(user);
        })
        .catch(err => console.log(err));
    } else if (!formObject.inputUsername && !formObject.inputPassword) {
      setLoading(false);
        toast.error(
          "Please fill out all fields to signup",
          {
            position: toast.POSITION.BOTTOM_RIGHT
          }
        );
      return;
    }
  }

  return (
    <Wrapper>
      <Title>
        Don't have an account? Sign up to find your perfect restaurant match.
      </Title>
      <FormCard
        form={
          <form>
            <Input
              onChange={handleInputChange}
              label="First Name"
              name="inputFirstName"
              placeholder="First Name"
            />
            <Input
              onChange={handleInputChange}
              label="Last Name"
              name="inputLastName"
              placeholder="Last Name"
            />
            <Input
              onChange={handleInputChange}
              label="User Name"
              name="inputUsername"
              placeholder="Username"
            />
            <Input
              onChange={handleInputChange}
              label="Email"
              name="inputEmail"
              placeholder="Email"
            />
            <Input
              label="Zip Code"
              onChange={handleInputChange}
              name="inputZipCode"
              placeholder="Zip Code"
            />
            <hr></hr>
            <Input
              label="Password"
              type="password"
              onChange={handleInputChange}
              name="inputPassword"
              placeholder="Password"
            />
            <Input
              label="Confirm Password"
              onChange={handleInputChange}
              name="inputConfirmPassword"
              placeholder="Confirm Password"
            />
            {loading ? (
              [<Spinner></Spinner>]
            ) : (
              <FormBtn onClick={handleFormSubmit}>Sign up</FormBtn>
            )}
            <Link to="/login">Sign in</Link>
          </form>
        }
      />
      <ToastContainer />
    </Wrapper>
  );
}

export default Signup;

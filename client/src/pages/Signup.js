import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../index.css";
//import Form from "../components/Form";
import Wrapper from "../components/Wrapper";
import { Input, FormBtn } from "../components/PageComponents";
import API from "../utils/API";
import MainCard from "../components/MainCard";
import Title from "../components/Title";

function Signup() {
  const [user, setUser] = useState({});
  const [formObject, setFormObject] = useState({});

  //function to grab all users and console.log
  function loadUsers() {
    API.getUsers()
      .then(res => setUser(res.data), console.log("loadUser call and API req"))
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
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
          if (res.data) {
            console.log("user posted to DB");
            window.location = '/login';
          } else if (!res.data) {
            alert('no user found')
            //This redirect does not work
            return <Redirect to='/login'></Redirect>
          }
          loadUsers(user);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <MainCard
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
            <FormBtn onClick={handleFormSubmit}>Sign up</FormBtn>
            <Link to="/login">Sign in</Link>
          </form>
        }
      />
    </Wrapper>
  );
}

export default Signup;

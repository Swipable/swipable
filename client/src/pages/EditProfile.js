import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { Input, InputReadOnly, FormBtn } from "../components/PageComponents";
import API from "../utils/API";
import MainCard from "../components/MainCard";
import Title from "../components/Title";
import axios from "axios";

function EditProfile() {
  const [user, setUser] = useState({});

  //function to grab one authenticated user and console.log
  useEffect(() => {
    API.fetchUser()
      .then(user => {
        setUser(user);
      })
      .catch(err => console.log(err));
  }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("user");
    console.log({
      user
    });
    axios
      .put(`/api/put/userprofile/1`, {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        zip_code: user.zip_code,
        updatedAt: new Date()
      })
      //.then(res => console.log(" has been updated in your db"));
      .then(res => {
        console.log(res);
        if (res.data === 0) {
          alert("No updates were made to profile");
          window.location = "/profile";
        } else if (res.data === 1) {
          console.log("user successfully updated");
          window.location = "/profile";
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Edit Profile</Title>
      <MainCard
        form={
          <form>
            <InputReadOnly label="User Name" value={user.username} />
            <Input
              onChange={handleInputChange}
              type="text"
              label="First Name"
              name="first_name"
              defaultValue={user.first_name}
            />
            <Input
              onChange={handleInputChange}
              label="Last Name"
              name="last_name"
              defaultValue={user.last_name}
            />
            <Input
              label="Email"
              onChange={handleInputChange}
              name="email"
              defaultValue={user.email}
            />
            <Input
              label="Zip Code"
              onChange={handleInputChange}
              name="zip_code"
              defaultValue={user.zip_code}
            />
            <FormBtn onClick={handleFormSubmit}>Update</FormBtn>
          </form>
        }
      />
    </Wrapper>
  );
}

export default EditProfile;

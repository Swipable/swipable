import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper";
import { Input, InputReadOnly, FormBtn } from "../components/PageComponents";
import API from "../utils/API";
import MainCard from "../components/MainCard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";

function EditProfile() {
  const { isLoggedIn, user } = useContext(UserContext);
  console.log({ isLoggedIn });
  const [profile, setProfile] = useState({});

  //function to grab one authenticated user and console.log
  useEffect(() => {
    API.fetchUser(user)
      .then(profile => {
        setProfile(profile);
      })
      .catch(err => console.log(err));
  }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.editUser(profile)
      .then(res => {
        console.log("res");
        console.log(res);
        if (res === 0) {
          alert("No updates were made to profile");
          window.location = "/profile";
        } else if (res === 1) {
          alert("user successfully updated");
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
            <InputReadOnly label="User Name" value={profile.username} />
            <Input
              onChange={handleInputChange}
              type="text"
              label="First Name"
              name="first_name"
              defaultValue={profile.first_name}
            />
            <Input
              onChange={handleInputChange}
              label="Last Name"
              name="last_name"
              defaultValue={profile.last_name}
            />
            <Input
              label="Email"
              onChange={handleInputChange}
              name="email"
              defaultValue={profile.email}
            />
            <Input
              label="Zip Code"
              onChange={handleInputChange}
              name="zip_code"
              defaultValue={profile.zip_code}
            />
            <FormBtn onClick={handleFormSubmit}>Update</FormBtn>
          </form>
        }
      />
    </Wrapper>
  );
}

export default EditProfile;

import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../components/Wrapper";
import { Input, InputReadOnly, FormBtn } from "../components/PageComponents";
import API from "../utils/API";
import FormCard from "../components/FormCard";
import Title from "../components/Title";
import UserContext from "../context/UserContext";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
// import CustomModal from "../components/CustomModal/custommodal";


function EditProfile(props) {
  const { isLoggedIn, user, setUser, loading, setLoading } = useContext(UserContext);
  const [profile, setProfile] = useState({});

  //function to grab one authenticated user and console.log
  useEffect(() => {
    API.fetchUser(user)
      .then(profile => {
        setProfile(profile);
        console.log(user)
      })
      .catch(err => console.log(err));
  }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
    setUser({ ...profile, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    setLoading(true);
    event.preventDefault();
    API.editUser(profile)
      .then(res => {
        setLoading(false)
        console.log("res");
        console.log(res);
        if (res === 0) {
            toast.error(
              "No changes were made to your profile",
              {position: toast.POSITION.BOTTOM_RIGHT}
            );
        } else if (res === 1) {
          console.log('updated the user')
          props.history.push("/profile")
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Edit Profile</Title>
      <FormCard
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
            {loading ? (
              [<Spinner></Spinner>]
            ) : (
              <FormBtn onClick={handleFormSubmit}>Update</FormBtn>
            )}
          </form>
        }
      />
      <ToastContainer autoClose={3000} />
    </Wrapper>
  );
}

export default EditProfile;

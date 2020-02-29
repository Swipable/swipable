import React, { useState } from "react";
import "../index.css";
//import Form from "../components/Form";
import Wrapper from "../components/Wrapper";
import { Input, FormBtn } from '../components/PageComponents';
import API from '../utils/API';

function Signup() {

  const [user, setUser] = useState({});
  const [formObject, setFormObject] = useState({});

  //function to grab all users and console.log
 
  function loadUsers() {
    API.getUsers()
    .then(res =>
      setUser(res),
      console.log('loadUser call and API req')
      )
      .catch(err => console.log(err))
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

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
        .then(data => 
          console.log('saveUser call'),
          loadUsers()
        .catch(err => console.log(err))
        )}
  };

  return (
    <Wrapper>
      <form>
        <Input
        onChange = {handleInputChange}
        name = "inputFirstName"
        placeholder = "First Name"
         />
        <Input
        onChange = {handleInputChange}
        name = "inputLastName"
        placeholder = "Last Name"
         />
        <Input
        onChange = {handleInputChange}
        name = "inputUsername"
        placeholder = "Username"
         />
        <Input
        onChange = {handleInputChange}
        name = "inputEmail"
        placeholder = "Email"
         />
        <Input
        onChange = {handleInputChange}
        name = "inputZipCode"
        placeholder = "Zip Code"
         />
         <hr></hr>
        <Input
        onChange = {handleInputChange}
        name = "inputPassword"
        placeholder = "Password"
         />
        <Input
        onChange = {handleInputChange}
        name = "inputConfirmPassword"
        placeholder = "Confirm Password"
         />
         <FormBtn
           onClick= {handleFormSubmit}>
             Sign up
           </FormBtn>

      </form>
      <br></br>
    </Wrapper>
  );
}

export default Signup;

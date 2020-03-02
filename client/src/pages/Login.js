import React, { useState, useEffect } from "react";
import "../index.css";
import Wrapper from "../components/Wrapper"
import API from '../utils/API';
import { Input, FormBtn } from '../components/PageComponents';

//PAGE IS SETUP TO HANDLE LOG IN

// after successful signup, redirected to login
// if unsuccessful, show error and reload signup
// after signup and login, redirected to search page

function Login() {
  //set initial state
  const [user, setUser] = useState([])
  const [formLogin, setFormLogin] = useState({})


  //executes loadUser and populates array w/res data
  useEffect(() => {
    loadUser()
  }, [])

  //finds one user where username in DB === username entered
  //loads and sets user state to data
  function loadUser() {
    API.getOneUser()
    .then(res =>
      setUser(res.data),
      console.log('Login/loadUser called')
      )
    .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormLogin({...formLogin, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formLogin.title && formLogin.author) {
      if (!formLogin.username || !formLogin.password) {
        console.log('no username or password entered')
      }

      loadUser()

    }
  };



  return (
    <Wrapper>
      <form>
        <Input
        onChange = {handleInputChange}
        name = "inputUsername"
        placeholder = "Username"
          />
        <Input
        onChange = {handleInputChange}
        name = "inputPassword"
        placeholder = "Password"
          />
        <FormBtn
        onClick= {handleFormSubmit}>
        Log in
        </FormBtn>
      </form>
  </Wrapper>

  );
}

export default Login;


{/* 
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                <label for="inputUserame">Username</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
   
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
              <a className="d-block text-center mt-2 small" href="http://localhost:3000/signup">Sign Up</a>

             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  */}
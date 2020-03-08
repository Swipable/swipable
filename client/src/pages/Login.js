import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../index.css";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { Input, FormBtn } from "../components/PageComponents";
import MainCard from "../components/MainCard";
import Title from "../components/Title";
import UserContext from '../context/UserContext';


//PAGE IS SETUP TO HANDLE LOG IN

// after successful signup, redirected to login
// if unsuccessful, show error and reload signup
// after signup and login, redirected to search page

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
      console.log("handleFormSubmit in Login.js");
      if (!formLogin.username || !formLogin.password) {
        console.log("no username or password entered");
      }
      API.getOneUser({
        username: formLogin.username,
        password: formLogin.password
      })
        .then(res => {
          console.log({ res: res.data });
          if (res.data.username) {
            setIsLoggedIn(true);
            setUser(res.data)
            // window.location = '/search'
            console.log("searched for one user")
            props.history.push("/search")
          } else if (!res.data.username) {
            alert('No user found - check credentials or sign up')
            // window.location.reload()
          } 
        })
        .catch(err => {
          if (err.response.status === 401) {
            alert('Incorrect credentials')
          }
          console.log("Sucker. " + err.response.status)
        });
    } else {
      console.log("there is no formLogin info");
    }
  }

  return (
      <Wrapper>
        <Title>Login</Title>
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

{
  /* 





  //const [user, setUser] = useState();
  const [formLogin, setFormLogin] = useState(null);


  useEffect(() => {
    if (!formLogin) {
      console.log('formLogin is null')
      return;
    }
    const subscription = defer(() => findUser(formLogin)).subscribe(setFormLogin);
    
    return () => {
      subscription.unsubscribe();
    }
  },[formLogin]);

  async function findUser() {
    await API.getOneUser({
      username: formLogin.username
    })  
    .then(data => console.log(data))
  }
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formLogin.username && formLogin.password) {
      console.log('handleFormSubmit in Login.js')
      //findUser();
      if (!formLogin.username || !formLogin.password) {
        console.log("no username or password entered");
      }
    }
  };

  
   return (
     <Wrapper>
       <form>
         <Input
           onChange={handleInputChange}
           id="username"
           name="username"
           placeholder="Username"
         />
         <Input
           onChange={handleInputChange}
           id="password"
           name="password"
           placeholder="Password"
         />
         <FormBtn onClick={handleFormSubmit}>Log in</FormBtn>
       </form>
     </Wrapper>
   );




  */
}

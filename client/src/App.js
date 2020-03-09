import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Details from "./pages/Details";
import Newsfeed from "./pages/Newsfeed";
import EditProfile from "./pages/EditProfile";
import Logout from './pages/Logout';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import UserContext from './context/UserContext';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})


  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/newsfeed" component={Newsfeed} />
            <Route exact path="/editprofile" component={EditProfile} />
          </Wrapper>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

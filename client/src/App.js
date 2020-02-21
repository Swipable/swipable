import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Details from "./pages/Details";
import Newsfeed from "./pages/Newsfeed";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/Newsfeed" component={Newsfeed} />

        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

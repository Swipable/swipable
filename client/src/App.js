import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
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
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/favorites" component={Favorites} />
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

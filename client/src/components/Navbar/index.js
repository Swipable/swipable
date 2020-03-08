import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import UserContext from '../../context/UserContext';


function Navbar(props) {

  const { isLoggedIn } = useContext(UserContext);
  console.log({isLoggedIn})
  return (
      <div className="header">
        <div className="row">
        <div className="col-lg-6">Icon</div>
        <div className="col-lg-6">
          <Link to="/profile" className="link">Profile</Link>
          <Link to="/search" className="link">Home</Link>
          <Link to="/team" className="link">Team</Link>
          <Link to="/favorites" className="link">Favourites</Link>
          <Link to="/newsfeed" className="link">Newsfeed</Link>
          <Link to="/login" className="link">Login</Link>
        </div>
        </div>
      </div>
  );
}

export default Navbar;
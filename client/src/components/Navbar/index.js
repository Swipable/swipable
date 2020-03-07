import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="row">
      <div className="col-lg-6">Icon</div>
      <div className="col-lg-6">
        <a href="/profile" className="link">Profile</a>
        <a href="/search" className="link">Home</a>
        <a href="/team" className="link">Team</a>
        <a href="/favorites" className="link">Favourites</a>
        <a href="/newsfeed" className="link">Newsfeed</a>
        <a href="/login" className="link">Login</a></div>
      </div>
    </div>
  );
}

export default Navbar;
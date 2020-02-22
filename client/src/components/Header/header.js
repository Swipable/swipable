import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="row">
      <div className="col-lg-6">Icon</div>
      <div className="col-lg-6">
        <a href="/profile" class="link">Profile</a>
        <a href="/search" class="link">Home</a>
        <a href="/team" class="link">Team</a>
        <a href="/favorites" class="link">Favourites</a>
        <a href="/newsfeed" class="link">Newsfeed</a>
        <a href="/login" class="link">Logout</a></div>
      </div>
    </div>
  );
}

export default Header;
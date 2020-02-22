import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="row">
      <div className="col-lg-6">Icon</div>
      <div className="col-lg-6"><a className="link">Profile</a><a className="link">Team</a><a className="link">Favourites</a><a className="link">Newsfeed</a><a className="link">Logout</a></div>
      </div>
    </div>
  );
}

export default Header;
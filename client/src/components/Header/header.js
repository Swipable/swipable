import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div class="row">
      <div class="col-lg-6">Icon</div>
      <div class="col-lg-6"><a class="link">Profile</a><a class="link">Team</a><a class="link">Favourites</a><a class="link">Newsfeed</a><a class="link">Logout</a></div>
      </div>
    </div>
  );
}

export default Header;
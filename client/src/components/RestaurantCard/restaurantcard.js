import React from "react";
import "./restaurantcard.css";
import CardBtn from "../CardBtn";



function RestaurantCard( {name, image, rating, price, link, handleBtnClick }) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
        <ul>
          <li>
          <a href={link}> {name} Website </a>
          </li>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Rating:</strong> {rating} <strong> Price:</strong> {price}
          </li>
        </ul>
      </div>
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
{/* //add in buttons */}
    </div>
  );
}

export default RestaurantCard;

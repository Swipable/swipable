import React from "react";
import "./favoritecard.css";

function FavoriteCard(props) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>rating:</strong> {props.rating}
          </li>
          <li>
            <strong>price:</strong> {props.price}
          </li>
          <li>
            <strong>Phone Number</strong> {props.display_phone}
          </li>
        </ul>
      </div>
      <span onClick={() => props.deleteFavorites(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FavoriteCard;

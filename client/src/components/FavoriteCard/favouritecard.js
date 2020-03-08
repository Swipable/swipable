import React from "react";
import "./favoritecard.css";

function FavoriteCard(props) {
  return (
    
    <div className="favorite-wrapper">
    <div className="favorite-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
          <strong>Name:</strong> <a href={props.link}> {props.name} </a>
          </li>
          <li>
            <strong>rating:</strong> {props.rating} Stars
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
    </div>
  );
}

export default FavoriteCard;

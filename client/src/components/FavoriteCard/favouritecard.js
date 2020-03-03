import React from "react";
import "./favoritecard.css";

function FavoriteCard(props) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          //src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
        />
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

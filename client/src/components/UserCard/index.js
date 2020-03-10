import React from "react";
import "./usercard.css";


function UserCard(props) {
  

  return (

    <div className="user-card">
      <div className="img-container">
        <img
          alt={props.username}
          // src={image}
          src= {`https://api.adorable.io/avatars/285/${props.username}.png`}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.username}
          </li>
          <li>
            <strong>First Name:</strong> {props.first_name}
          </li>
          <li>
            <strong>Last Name:</strong> {props.last_name}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default UserCard;

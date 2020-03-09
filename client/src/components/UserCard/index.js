import React from "react";
import "./usercard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img
          alt={props.username}
          // src={props.image}
          src="https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
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
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default UserCard;

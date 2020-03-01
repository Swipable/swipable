import React from "react";
import "./usercard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img
          alt={props.username}
          // src={props.image}
          src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
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

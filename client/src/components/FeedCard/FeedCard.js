import React from "react";
import "./feedcard.css";

function FeedCard(props) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img
          // alt={props.username}
          // src={props.image}
          src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
        />
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>restaurant_id:</strong> {props.restaurant_id}
          </li> */}
          <li>
            <strong>Activity:</strong> {props.activity_type}
          </li>
          <li>
            <strong>Restaurant Name:</strong> {props.user_id}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> 
        𝘅
      </span> */}
    </div>
  );
}

export default FeedCard;

import React from "react";
import "./feedcard.css";

function FeedCard(props) {

  return (
    <div className="feedcard-wrapper">
      <div className="feedcard-card row">
        <div className="img-container col-4">
          <img
            // alt={props.username}
            // src={props.image}
            src= {`https://api.adorable.io/avatars/285/${props.username}.png`}
            alt="Some Picture"
          />
        </div>
        <div className="content col-8">
          <h3>
            {props.username} {props.activity_type} {props.restaurant_name}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;

import React from "react";
import "./feedcard.css";

function FeedCard(props) {

  return (
    <>

    <div className="feedcard-container">

<div className="feed-card">
   
      <div className="content">
      <div className="avatar-container">
              <img className="avatar-image"
              src= {`https://api.adorable.io/avatars/130/${props.username}.png`}
              alt= {`${props.username}'s avatar`}
              />
            
        </div>
        <ul>
          <li>
          <strong>{props.username}</strong> {props.activity_type}
          </li>
          <li>
          <a className="linkedContent" href={`${props.link}`}> {props.restaurant_name} </a>
          </li>
      
        </ul>
      </div>

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
 
    </div>


       </div>
  
        
</>
  );
}

export default FeedCard;

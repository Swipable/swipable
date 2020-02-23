import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ name, image, profileUrl, handleBtnClick }) {
  return (
    <div className="jumbotron card-container">
      <Card
        name={name}
        image={image}
        profileUrl={profileUrl}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}

export default CardContainer;

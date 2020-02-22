import React from "react";
import "./style.css";
import CardTitleText from "../CardTitleText";

function CardTitle({ name }) {
  return (
    <div className="blue text-center">
      <CardTitleText name={name} />
    </div>
  );
}

export default CardTitle;

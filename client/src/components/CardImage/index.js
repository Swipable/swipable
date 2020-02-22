import React from "react";

function CardImg({ image }) {
  return (
    <div>
      <img className="card-img" src={image} alt="restaurant thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;
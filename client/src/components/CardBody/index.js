import React from "react";

function CardBody({ restaurantUrl }) {
  return (
    <p className="h4 pt-3">
      Recomended Restaurant: <a target="blank" href={restaurantUrl}>{restaurantUrl}</a>
    </p>
  );
}

export default CardBody;

import React, { useState } from "react";
import "../Form/form.css";

function Prices() {

  const [price, setPrice] = React.useState('');

  const handlePriceChange = (price) => {
     setPrice(price);
     console.log(price);
 }

  return (
    <select name="price" value={price} onChange={event => handlePriceChange(event.target.value)}>
      <option value=""> Price </option>
      <option value="1"> $ </option>
      <option value="2"> $$ </option>
      <option value="3"> $$$ </option>
      <option value="4"> $$$$ </option>
      <option value="5"> $$$$$ </option>
     
    </select>
 

  );
}


export default Prices;


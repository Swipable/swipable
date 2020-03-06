import React, { useState } from "react";
import "../Form/form.css";
import "./searchbar.css";

function SearchBar(props) {

    return (
 
      <>
          <input id="searchBox"
            type="text"
            placeholder= 'address, neighborhood, city, state, or zip'
            value={props.location}
            onChange={e => props.setInput(e.target.value)}
          />
        <input type="submit" value="Submit" />
        </>

    );
  }

export default SearchBar;
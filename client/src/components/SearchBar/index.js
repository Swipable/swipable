import React, { useState } from "react";
import "../Form/form.css";
import "./searchbar.css";

function SearchBar(props) {
    const [location, setInput] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`searching in ${location}`)
    }
    return (
      <form onSubmit={handleSubmit}>
      
          <input id="searchBox"
            type="text"
            placeholder= 'address, neighborhood, city, state, or zip'
            value={location}
            onChange={e => setInput(e.target.value)}
          />
        <input type="submit" value="Submit" />
      </form>
    );
  }

export default SearchBar;
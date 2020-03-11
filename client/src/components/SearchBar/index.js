import React, { useState } from "react";
import "../FormCard/form.css";
import "./searchbar.css";

function SearchBar(props) {
  const [currentValue, setCurrentValue] = useState('')

  return (
    <div className="searchContainer">
      <input
        className="form-control form-control-lg d-flex justify-content-center "
        id="cssform"
        type="text"
        placeholder="City, state, or zip code"
        onKeyDown={e => e.key === 'Enter' ? props.setInput(currentValue) : null}
        onChange={e => setCurrentValue(e.target.value)}
      />
      {/* <input type="submit" value="Submit" /> */}
    </div>
  );
}

export default SearchBar;

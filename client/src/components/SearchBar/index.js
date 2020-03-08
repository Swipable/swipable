import React from "react";
import "../Form/form.css";
import "./searchbar.css";

function SearchBar(props) {

    return (
 
      <div class="searchContainer">
          <input class="form-control form-control-lg d-flex justify-content-center " 
            id="cssform"
            type="text"
            placeholder= 'City, state, or zip code'
            value={props.location}
            onChange={e => props.setInput(e.target.value)}
          />
        {/* <input type="submit" value="Submit" /> */}

        </div>

    );
  }

export default SearchBar;
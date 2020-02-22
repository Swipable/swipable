import React from "react";
import "../Form/form.css";
import "./searchbar.css";

function SearchBar() {
    return (
        <div>
            <form class="form-inline form-label-group my-2 my-lg-0">
                <input type="text" id="searchBox" class="form-control" placeholder="Search" required autofocus />
                <label for="searchBox" id="search-label">Enter City or Zipcode ......</label>
            </form>
        </div>
    );
}

export default SearchBar;

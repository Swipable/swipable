import React from "react";
import "../components/Form/form.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";
import SearchBar from "../components/SearchBar/searchbar";
import Dropdown from "../components/Dropdown/dropdown";


function Search() {
  return (
    <Wrapper>
      <Header></Header>
      <div class="filter-container">
        <div class="row d-inline-flex">
        <SearchBar></SearchBar>
          </div>
          <br></br>
          <div class="row d-inline-flex">
          <div class="col-lg-3">
          <Dropdown></Dropdown>
          </div>
          <div class="col-lg-3">
            <Dropdown></Dropdown>
          </div>
          <div class="col-lg-3">
            <Dropdown></Dropdown>
          </div>
          <div class="col-lg-3">
            <Dropdown></Dropdown>
          </div>
        </div>
      </div>
    <Footer></Footer>
      </Wrapper >
    );
}

export default Search;

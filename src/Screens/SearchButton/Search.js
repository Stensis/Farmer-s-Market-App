import React from "react";
import "../SearchButton/Search.module.css"

function Search() {
    return (
      <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>
    );
  }
  
  export default Search;
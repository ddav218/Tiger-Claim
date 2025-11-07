import React from "react";
import "../../styles/searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search lost items..."
        className="search-input"
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;

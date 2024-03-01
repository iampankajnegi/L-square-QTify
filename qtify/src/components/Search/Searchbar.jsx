import React from "react";
import "./search.css";
import SearchIcon from "../../assets/searchIcon.png";

const Searchbar = () => {
  return (
    <>
      <div className="search-bar">
        <div className="search-container">
          <input type="text" placeholder="Search a album of a choice" />
        </div>
        <div className="search-icon">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Searchbar;

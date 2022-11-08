import React, { Component } from "react";
import GearIcon from "../../assets/GearIcon";
import "./SearchBarStyles.css";

class SearchBar extends Component {
  render() {
    return (
      <div class="custom-search">
        <div class="search-bar-gear">
          <GearIcon />
        </div>
        <input
          type="text"
          class="custom-search-input"
          placeholder="Your Search Query"
        />
        <button class="custom-search-botton" type="submit">
          <span class="custom-search-botton-text">Search</span>
        </button>
      </div>
    );
  }
}

export default SearchBar;

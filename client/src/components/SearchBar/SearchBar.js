import React, { Component, useState } from "react";
import GearIcon from "../../assets/GearIcon";
import { useNavigate } from "react-router-dom";
import "./SearchBarStyles.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/results=" + keyword, {
      state: {
        keyword: keyword,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="custom-search">
        <div class="search-bar-gear">
          <GearIcon />
        </div>
        <input
          type="text"
          class="custom-search-input"
          placeholder="Your Search Query"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button class="custom-search-botton" type="submit">
          <span class="custom-search-botton-text">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

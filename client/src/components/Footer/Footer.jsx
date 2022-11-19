import React, { useState } from "react";
import "./FooterStyles.css";
import SearchBar from "../SearchBar/SearchBar";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-container">
        <h1>Try it out now!</h1>
        <h2>All it takes is one click to begin your SEO journey</h2>
        <h3>
          Simply type in the term that you would like to rank for and <br />
          Crawler.io will do the rest for you.
        </h3>
        <div className="footer-search-button">
          <div className="footer-search-button-wrapper">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

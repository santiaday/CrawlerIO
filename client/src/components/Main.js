import React, { useState } from "react";
import { ReactComponent as SplashPageDashboard } from "../assets/homepage-splash.svg";
import SearchBar from "./SearchBar/SearchBar.js";
import Features from "./Features/Features.jsx";
import TechStack from "./TechStack/TechStack";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className="main">
      <div className="landing-page">
        <div className="slogan">
          <h1>Skyrocket Your</h1>
          <h1 className="alt-color">Organic Traffic</h1>
          <p className="slogan-paragraph-text">
            Boost your search engine optimization with ease.
          </p>
          <div className="header-search-button">
            <div className="header-search-button-wrapper">
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="splash-dashboard">
          <SplashPageDashboard />
        </div>
      </div>
      <Features />
      <TechStack />
      <Team />
      <Footer />
    </div>
  );
};

export default Main;

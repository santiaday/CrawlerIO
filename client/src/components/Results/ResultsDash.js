import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader/Loading";
import KeywordResult from "./KeywordResult/KeywordResult";
import SearchBar from "../SearchBar/SearchBar";
import "./ResultsDashStyles.css";

const ResultsDash = () => {
  const [loading, setLoading] = useState(true);
  const [keywordExtraction, setKeywordExtraction] = useState([]);
  const temp = useLocation();
  let keywordOriginal = temp.state.keyword;

  useEffect(() => {
    fetch(
      "http://localhost:5000/extract-keywords?search_term=" + keywordOriginal,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setKeywordExtraction(data);
        setLoading(false);
        console.log(keywordExtraction);
      });
  }, []);

  useEffect(() => {});

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="results-dash-container">
      <div className="results-dash-title-wrapper">
        <h2 className="results-dash-title">
          Search Results For: <span>{keywordOriginal}</span>
        </h2>
        <h3>
          <a href="/">Home</a>
        </h3>
      </div>

      <hr className="results-dash-title-line" />
      <div className="table-header-container">
        <div>Keyword</div>
        <div>Link</div>
        <div className="dash-result-confidence">Confidence</div>
      </div>

      {keywordExtraction.map((keyword) => {
        return <KeywordResult keyword={keyword} />;
      })}

      <div className="results-searchbar-wrapper">
        <h1>Search For More Keywords</h1>
        <div className="results-searchbar-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default ResultsDash;

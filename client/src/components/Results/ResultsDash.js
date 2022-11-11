import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader/Loading";

const ResultsDash = () => {
  const [loading, setLoading] = useState(true);
  const [keywordExtraction, setKeywordExtraction] = useState([]);

  const temp = useLocation();
  const keyword = temp.state.keyword;

  useEffect(() => {
    console.log("got hereeee");
    fetch("http://localhost:5000/extract-keywords", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setKeywordExtraction(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {});

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <span>Your keyword is {keywordExtraction}</span>
    </div>
  );
};

export default ResultsDash;

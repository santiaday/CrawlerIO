import React, { useEffect, useState } from "react";
import "./keywordResultStyles.css";

const ResultsDash = ({ keyword }) => {
  const [loading, setLoading] = useState(true);
  const [keywordExtraction, setKeywordExtraction] = useState([]);

  useEffect(() => {});

  return (
    <div className="result-container-2">
      <div className="result-container">
        <div className="keyword-result-word">{keyword[0]}</div>
        <div className="keyword-result-link">
          <a href={keyword[2]} target="_blank">
            {keyword[3]}
          </a>
        </div>
        <div
          className="keyword-result-confidence"
          style={{
            backgroundColor:
              keyword[1] > 0.65
                ? "#2ED47A"
                : keyword[1] < 0.8 && keyword[1] > 0.5
                ? "#FCA311"
                : "#F7685B",
          }}
        >
          {keyword[1]}
        </div>
      </div>
    </div>
  );
};

export default ResultsDash;

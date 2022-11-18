import "./KeywordSearchStyles.css";
import { ReactComponent as SearchSample } from "../../../assets/search-results-sample.svg";
import { ReactComponent as Checkmark } from "./checkmark.svg";

const KeywordSearch = () => {
  return (
    <div className="keyword-search">
      <div>
        <img
          className="search-results-img"
          src={require("../../../assets/search-results-sample.png")}
          alt="search results sample"
        />
      </div>

      <div className="keyword-search-box">
        <div className="keyword-search-box-inner">
          <h1>Keyword Search</h1>
          <p>Using our custom tailored set of algorithms</p>
          <p>Crawler.io can quickly and accurately provide the</p>
          <p>most relevant keyword for any topic</p>
          <ul>
            <li>
              <Checkmark />
              <span className="li-text">Automatically find keywords</span>
            </li>
            <li>
              <Checkmark />
              <span className="li-text">
                Sort keywords by their significance
              </span>
            </li>
            <li>
              <Checkmark />
              <span className="li-text">
                Find where those keywords are being used
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;

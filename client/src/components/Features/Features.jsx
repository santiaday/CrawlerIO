import { ReactComponent as PersonalizationIcon } from "../../assets/personalization-icon.svg";
import { ReactComponent as KeywordSearchIcon } from "../../assets/keyword-search-icon.svg";
import { ReactComponent as SavedSearchesIcon } from "../../assets/saved-searches-icon.svg";

import KeywordSearch from "./KeywordSearch/KeywordSearch.jsx";
import "./FeaturesStyles.css"

const Features = () => {
  return (
    <div className="features">
      <h1>One SEO tool.</h1>
      <h1 className="alt-color">Everything you'll ever need</h1>
      <div className="icon-wrapper">
        <div className="icon">
          <PersonalizationIcon />
          <p className="small-text">Personalization</p>
        </div>
        <div className="icon">
          <KeywordSearchIcon />
          <p className="small-text">Keyword Search</p>
        </div>
        <div className="icon">
          <SavedSearchesIcon />
          <p className="small-text">Saved Searches</p>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <KeywordSearch />
    </div>
  );
};

export default Features;

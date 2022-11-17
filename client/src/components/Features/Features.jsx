import { ReactComponent as PersonalizationIcon } from "../../assets/personalization-icon.svg";
import { ReactComponent as KeywordSearchIcon } from "../../assets/keyword-search-icon.svg";
import { ReactComponent as SavedSearchesIcon } from "../../assets/saved-searches-icon.svg";

import KeywordSearch from "./KeywordSearch/KeywordSearch.jsx";
import "./FeaturesStyles.css"

const Features = () => {
  return (
    <div className="features">
      <div>
        <h1>One SEO tool.</h1>
        <h1 className="alt-color">Everything you'll ever need</h1>
        <div className="icon-wrapper">
          <div className="icon">
            <PersonalizationIcon />
            <small className="text">Personalization</small>
          </div>
          <div className="icon">
            <KeywordSearchIcon />
            <small className="text">Keyword Search</small>
          </div>
          <div className="icon">
            <SavedSearchesIcon />
            <small className="text">Saved Searches</small>
          </div>
        </div>
      </div>
      {/* <KeywordSearch /> */}
    </div>
  );
};

export default Features;

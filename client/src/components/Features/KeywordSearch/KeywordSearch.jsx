import "./KeywordSearchStyles.css"

const KeywordSearch = () => {
  return (
    <div className="keyword-search">
      <img className="search-results-img" src={require("../../../assets/search-results-sample.png")} alt="search results sample" />
      <div className="keyword-search-box">
        <h1>Keyword Search</h1>
        <p>Using our custom tailored set of algorithms</p>
        <p>Crawler.io can quickly and accurately provide the</p>
        <p>most relevant keyword for any topic</p>
        <ul>
          <li>Automatically find keywords</li>
          <li>Sort keywords by their significance</li>
          <li>Find where those keywords are being used</li>
        </ul>
        {/* <p>Automatically find keywords</p>
        <p>Sort keywords by their significance</p>
        <p>Find where those keywords are being used</p> */}
      </div>
    </div>
  );
};

export default KeywordSearch;

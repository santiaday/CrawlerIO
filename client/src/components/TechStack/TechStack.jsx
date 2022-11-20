import { ReactComponent as TechStackFigures } from "../../assets/tech-stack-figure.svg";
import "./TechStackStyles.css";

const Features = ({ techStackRef }) => {
  return (
    <div className="tech-stack" ref={techStackRef}>
      <div className="tech-stack-wrapper">
        <div className="tech-figure-wrapper">
          <TechStackFigures />
        </div>

        <div className="tech-stack-right-text">
          <h1 className="first-line-tech-title">Built with the</h1>
          <h1 className="second-line-tech-title">latest technology</h1>
          <hr className="hr-line-break-tech-stack" />
          <div className="paragraph-tech-stack">
            <p>
              Crawler.io was built using an array of the latest and most
              advanced technologies available to give you the best experience
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

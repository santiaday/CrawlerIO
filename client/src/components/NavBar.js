import { useState, useRefs, useEffect } from "react";

const NavBar = ({ featuresRef, techStackRef, teamRef }) => {
  const [mobileNavView, setMobileNavView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobileNavView(true);
    } else {
      setMobileNavView(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleClick = (link) => {
    if (link === 1) {
      featuresRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
    if (link === 2) {
      techStackRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
    if (link === 3) {
      teamRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  console.log(mobileNavView);

  return !mobileNavView ? (
    <nav className="navbar">
      <div className="left-side-navbar">
        <img className="logo" src={require("../assets/logo.png")} alt="logo" />
        <ul className="links">
          <li>
            <a onClick={() => handleClick(1)}>Features</a>
          </li>
          <li>
            <a onClick={() => handleClick(2)}>Tech</a>
          </li>
          <li>
            <a onClick={() => handleClick(3)}>About Us</a>
          </li>
          <li>
            <a
              href="https://github.com/santiaday/CEN4010-Project"
              target="_blank"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <a onClick={() => handleClick(1)}>Features</a>
          </li>
          <li>
            <a onClick={() => handleClick(2)}>Tech</a>
          </li>
          <li>
            <a onClick={() => handleClick(3)}>About Us</a>
          </li>
          <li id="docs=link">
            <a
              href="https://github.com/santiaday/CEN4010-Project"
              target="_blank"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

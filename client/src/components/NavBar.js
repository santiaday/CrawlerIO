const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left-side-navbar">
        <img className="logo" src={require("../assets/logo.png")} alt="logo" />
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Tech</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

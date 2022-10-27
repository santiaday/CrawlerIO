const NavBar = () => {
  return (
    <nav className="navbar">
        <img className="logo" src={require('../assets/logo.png')} alt="logo" />
        <ul className="links">
          <li><a href="#">Features</a></li>
          <li><a href="#">About Us</a></li>
          <li><div className="get-started"><a href="#">Get Started  &gt;</a></div></li>
        </ul>
    </nav>
  );
}
  
export default NavBar;
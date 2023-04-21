import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="topnav">
      <div className="topnavbrand">
        <a href="/index">MovieDL</a>
      </div>
      <div className="topnav-right">
        <a href="/search" className="topnav-right">
          Search
        </a>
        <a href="/login" className="topnav-right">
          Log In
        </a>
        <a href="/account" className="topnav-right">
          My Account
        </a>
        <button className="topnav-right">Genre Select</button>
        <a href="/cart" className="topnav-right">
          Cart
        </a>
      </div>
    </div>
  );
};

export default NavBar;

import { Fragment } from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <nav id="nav-container">
        <div id="nav-left">
          <span id="logo">SAMSUNG</span>
          <ul id="navbar-left">
            <li className="list-item">
              <a href="/" className="nav-item">
                Mobile
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                TV&AV
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                Home Appliance
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                IT
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                Displays
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                SmartThings
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="nav-item">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <ul id="navbar-right">
          <li className="list-item">
            <a href="/" className="nav-item">
              Support
            </a>
          </li>
          <li className="list-item">
            <a href="/" className="nav-item">
              ForBusiness
            </a>
          </li>
          <li className="list-item">
            <a href="/" className="nav-icon">
            <i className="fas fa-search"></i>
            </a>
          </li>
          <li className="list-item">
            <a href="/" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="list-item">
            <a href="/" className="nav-icon">
              <i className="far fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;

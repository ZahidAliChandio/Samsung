import { Fragment, useState } from "react";
import Tabs from "./Tab";
import { mobileLinks } from "../assets/Links";
import { tvAvLinks } from "../assets/Links";
import { homeAppliance } from "../assets/Links";
import { it } from "../assets/Links";
import { displays } from "../assets/Links";
import DropDown from "../UI/DropDown";
import "./Navbar.css";
const Navbar = () => {
  const menu = {
    tabs: [
      {
        title: "Mobile",
        link: "/",
      },
      {
        title: "TV&AV",
        link: "/",
      },
      {
        title: "Home Appliances",
        link: "/",
      },
      {
        title: "IT",
        link: "/",
      },
      {
        title: "Displays",
        link: "/",
      },
      {
        title: "SmartThings",
        link: "/",
      },
      {
        title: "Shop",
        link: "/",
      },
    ],
  };
  const linkArray = [mobileLinks, tvAvLinks, homeAppliance, it,displays];
  const [link, setLink] = useState(null);
  const handleMouseOver = (index) => {
    const link = linkArray[index];
    setLink(link);
  };
  return (
    <Fragment>
      <nav id="nav-container">
        <div id="nav-left">
          <span id="logo">SAMSUNG</span>
          <ul id="navbar-left">
            {menu.tabs.map((elem, index) => {
              return (
                <li
                  className="nav-item"
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                >
                  <a href={elem.link} className="item-link">
                    {elem.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul id="navbar-right">
          <li className="nav-item">
            <a
              href="/"
              className="item-link"
              onMouseOver={() => handleMouseOver(7)}
            >
              Support
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="item-link">
              ForBusiness
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-icon">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-icon">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-icon">
              <i className="far fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
      {link && <DropDown item={link} setItem={setLink} />}
    </Fragment>
  );
};
export default Navbar;

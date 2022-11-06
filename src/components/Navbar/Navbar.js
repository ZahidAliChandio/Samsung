import { Fragment, useState } from "react";
import { Transition } from "react-transition-group";
import { mobileLinks } from "../../assets/Links";
import { tvAvLinks } from "../../assets/Links";
import { homeAppliance } from "../../assets/Links";
import { it } from "../../assets/Links";
import { displays } from "../../assets/Links";
import { smartThings } from "../../assets/Links";
import { shop } from "../../assets/Links";
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
  const linkArray = [
    mobileLinks,
    tvAvLinks,
    homeAppliance,
    it,
    displays,
    smartThings,
    shop,
  ];
  const [expandNav, setExpandNav] = useState(false);
  const [link, setLink] = useState(null);

  const mouseOverHandler = (index) => {
    const link = linkArray[index];
    setLink(link);
    setExpandNav(true);
  };
  const mouseOutHandler = () => {
    setExpandNav(false);
  };
  return (
    <Fragment>
      <nav id="nav-container" onMouseLeave={() => mouseOutHandler()}>
        <navbar id="main-nav">
          <div id="nav-left">
            <span id="logo">SAMSUNG</span>
            <ul id="navbar-left">
              {menu.tabs.map((elem, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      href={elem.link}
                      className="item-link"
                      onMouseOver={() => mouseOverHandler(index)}
                    >
                      {elem.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul id="navbar-right" className="relative">
            <li className="nav-item">
              <a
                href="/"
                className="item-link"
                onMouseOver={() => mouseOverHandler(7)}
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
            <li className="nav-item group relative">
              <a href="/" className="nav-icon">
                <i className="far fa-user"></i>
              </a>
              <div className="rounded-md shadow absolute right-8 -translate-x-2 transition-all duration-200 top-24 hidden group-hover:inline-flex group-hover:right-2">
                <button
                  href="/"
                  className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-sm font-medium shadow-lg z-30"
                >
                  Log-in/Sign-Up
                </button>
              </div>
            </li>
          </ul>
        </navbar>
        <div className="relative">
          <Transition
            in={expandNav}
            timeout={{ enter: 500, exit: 5000 }}
            mountOnEnter
            unmountOnExit
          >
            {(state) => <DropDown item={link} setItem={setLink} hide={state} />}
          </Transition>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;

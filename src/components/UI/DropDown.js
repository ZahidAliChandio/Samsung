import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Transition } from "react-transition-group";

const DropDown = ({ item, hide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLink, setActiveLink] = useState(item[activeIndex].category);
  const heading = item[0].heading;
  const cssClass =
    hide === "entering" ? "extend" : hide === "exiting" ? "shrink" : null;

  const onMouseOverHandler = (index) => {
    setActiveIndex(index);
    const isActive = item[index].category;
    setActiveLink(isActive);
  };

  const navbar = (
    <ul className={"w-full"}>
      {item.map((elem, index) => {
        return elem.title ? (
          <li
            key={index}
            className={
              "group text-lg hover:font-bold cursor-pointer flex items-center justify-between my-1 py-1 w-full mr-4"
            }
            onMouseOver={() => onMouseOverHandler(index)}
          >
            <span>{elem.title}</span>
            <Transition
              in={activeIndex === index}
              timeout={{ enter: 7000, exit: 0 }}
              mountOnEnter
              unmountOnExit
            >
              {(state) => (
                <span>
                  <i
                    className={`fas fa-chevron-right transition-all duration-100 ${
                      state === "entering" ? "translate-x-2" : "translate-x-0"
                    }`}
                  ></i>
                </span>
              )}
            </Transition>
          </li>
        ) : null;
      })}
    </ul>
  );
  const subNav = activeLink ? (
    <ul className="w-full">
      {activeLink.map((elem, index) => {
        return (
          <li key={index} className="text-lg my-2">
            <a
              href={elem.link}
              className="py-1 border-black hover:font-bold hover:border-b-2"
            >
              {elem.model}
            </a>
          </li>
        );
      })}
    </ul>
  ) : null;
  return (
    <nav
      className={`absolute left-0 top-0 w-full duration-200 z-10 px-8
                  ${cssClass} overflow-hidden nav-height bg-white text-left`}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
        sx={{ justifyContent: "space-between" }}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-black leading-10 my-4">
            {heading}
          </h2>
          <div className="flex w-1/2 gap-8 align-left">
            {navbar}
            {subNav}
          </div>
        </div>
        {/* <div>{rightContent}</div> */}
      </Stack>
    </nav>
  );
};

export default DropDown;

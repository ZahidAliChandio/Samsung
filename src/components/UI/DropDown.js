import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Transition } from "react-transition-group";
import { useEffect } from "react";

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
        ) : (
          // If there is no title of Element then directly render its model
          <li key={index} className="text-lg my-2 w-fit">
            <a
              href={elem.link}
              className="relative w-inherit py-1 after:content-[''] after:w-24 after:absolute after:left-1/2 after:bottom-0 after:border-b after:border-black after:scale-0 hover:after:scale-100 after:duration-200 after:tansition-all after:-translate-x-1/2"
            >
              {elem.model}
            </a>
          </li>
        );
      })}
    </ul>
  );
  const subNav = activeLink ? (
    <ul className="w-full">
      {activeLink.map((elem, index) => {
        return (
          <li key={index} className="text-lg my-2 w-fit">
            <a
              href={elem.link}
              className="relative w-inherit py-1 after:content-[''] after:w-24 after:absolute after:left-1/2 after:bottom-0 after:border-b after:border-black after:scale-0 hover:after:scale-100 after:duration-200 after:tansition-all after:-translate-x-1/2"
            >
              {elem.model}
            </a>
            {elem.batch && (
              <span className="text-center align-middle text-white bg-blue-500 py-xsmall px-small rounded-3xl text-small ml-2">
                NEW
              </span>
            )}
          </li>
        );
      })}
    </ul>
  ) : null;
  useEffect(() => {
    setActiveIndex(0);
    setActiveLink(item[0].category);
  }, [item]);
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
          <div className="flex w-1/2 gap-8 text-left">
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

import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const DropDown = ({ item, setItem, hide }) => {
  const [activeLink, setActiveLink] = useState(item[0].category);
  const heading = item[0].heading;
  const cssClass =
    hide === "entering" ? "extend" : hide === "exiting" ? "shrink" : null;

  const onMouseOverHandler = (index) => {
    const isActive = item[index].category;
    setActiveLink(isActive);
  };

  const navbar = (
    <ul className={"w-full"}>
      {item.map((elem, index) => {
        return (
          <li
            key={index}
            className={
              "group text-lg hover:font-bold cursor-pointer flex items-center justify-between my-1 py-1 w-full"
            }
            onMouseOver={() => onMouseOverHandler(index)}
          >
            <span>{elem.title}</span>
            <span>
              <i className="fas fa-chevron-right -translate-x-2 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:opacity-100"></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
  const subNav = (
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
  );
  return (
    <nav
      className={`w-full duration-200 z-10 px-8
                  ${cssClass} overflow-hidden nav-height`}
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
          <div className="flex w-1/2 gap-8">
            {navbar}
            {activeLink.length > 0 && subNav}
          </div>
        </div>
        {/* <div>{rightContent}</div> */}
      </Stack>
    </nav>
  );
};

export default DropDown;

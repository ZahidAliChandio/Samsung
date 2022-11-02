import { useState } from "react";
const DropDown = ({ item, setItem }) => {
  const [activeLink, setActiveLink] = useState([]);
  const heading = item[0].heading;

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
            className={`group text-lg hover:font-bold cursor-pointer flex items-center justify-between my-1 py-1 w-3/4`}
            onMouseOver={() => onMouseOverHandler(index)}
          >
            <span>{elem.title}</span>
            <span>
              <i className="fas fa-chevron-right hidden group-hover:block"></i>
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
  const onMouseOutHandler = () => {
    setItem(null);
  };
  return (
    <nav
      className="absolute top-4 left-0 bg-white w-full h-screen z-10 px-8"
      onMouseLeave={() => onMouseOutHandler()}
    >
      <h2 className="text-3xl font-bold inline-block border-b-2 border-black leading-10 my-4">
        {heading}
      </h2>
      <div className="flex w-1/2">
        {navbar}
        {activeLink.length > 0 && subNav}
      </div>
    </nav>
  );
};

export default DropDown;

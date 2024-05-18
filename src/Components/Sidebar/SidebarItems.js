import React, { useContext, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import ColorContext from "../../Context/colormode/colorContext";

const SidebarItems = (props) => {
  const { icon, name, subitems, hovered, path } = props;
  const [open, setOpen] = useState(false);
  const { lightMode } = useContext(ColorContext);

  return (
    <>
      <Link
        to={path}
        onClick={() => {
          setOpen(!open);
          console.log("open");
        }}
        className={` ${
          lightMode ? "" : "hover:bg-gray-500 hover:text-white"
        } px-[9px]  relative py-[10px] active:bg-purple-500   rounded flex items-center w-full box-border`}
      >
        <div className="mr-[5px]">{icon}</div>
        <span
          className={`${
            hovered ? "max-w-[1000px]  opacity-100" : "max-w-0  opacity-0"
          } font-medium transition-all ease-in-out duration-300 `}
        >
          {name}
        </span>
        <span
          className={`absolute right-[10px] transition-all duration-300 ease-in-out ${
            open ? "-rotate-[89.9deg]" : "rotate-0"
          } ${
            hovered
              ? "max-w-[1000px] max-h-screen rotate-0 opacity-100"
              : "max-w-0 max-h-0 rotate-180 opacity-0"
          }`}
        >
          {subitems && <SlArrowLeft style={{ fontSize: "18px" }} />}
        </span>
      </Link>
      {subitems &&
        subitems.map((subitem, index) => (
          <Link
            to={subitem.link}
            key={index}
            className={` active:bg-purple-500 active:text-white ${
              lightMode
                ? "bg-white"
                : "bg-gray-700 hover:bg-gray-500 hover:text-white "
            }} flex items-center  transition-all  ease-in-out duration-200 overflow-hidden ${
              open
                ? "max-h-[1000px] px-[12px] py-[10px] w-full  box-border opacity-100"
                : "max-h-0 opacity-0  p-0 m-0"
            }`}
          >
            <div className={` ${open ? "mr-[5px]" : "hidden h-0 w-0"}`}>
              <FaRegCircle style={{ fontSize: "25px" }} />
            </div>
            <span
              className={` ${open ? "font-medium" : "hidden h-0 w-0"} ${
                hovered ? "max-w-[1000px]  opacity-100" : "max-w-0  opacity-0"
              } transition-all ease-in-out`}
            >
              {subitem.name}
            </span>
          </Link>
        ))}
    </>
  );
};

export default SidebarItems;

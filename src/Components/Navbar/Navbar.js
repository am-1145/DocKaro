import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

import { FaBell } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";

import ColorContext from "../../Context/colormode/colorContext";

const Navbar = () => {
  const { lightMode, setLightMode } = useContext(ColorContext);
  const branches = ["Delhi", "Bangalore"];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        lightMode ? "bg-white border-b border-black" : " bg-[#283046]"
      } h-[47px] p-[8px]   max-w-full flex  w-full justify-between items-center space-x-3`}
    >
      <div className="flex items-center justify-center text-white space-x-2">
        <button
          className={` ${
            lightMode ? "text-black" : "text-white "
          } flex items-center justify-center space-x-3 py-[8px] px-[16px]`}
        >
          <GiHamburgerMenu style={{ fontWeight: "600" }} />
        </button>
        <button
          className="bg-blue-500 px-[8px] text-nowrap py-[5px] md:px-[12px] md:py-[6px] relative rounded"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="font-bold flex items-start justify-center space-x-3">
            <span className="pt-[3px]">
              <GrMapLocation fontSize={{ fontSize: "25px" }} />
            </span>
            <span>Main Branch </span>
            <span className="flex items-center justify-center pt-[3px]">
              <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
            </span>
          </span>
          {open && (
            <div className="absolute rounded w-full left-0 bg-slate-700 flex  flex-col bottom-[-90px] ">
              {branches.map((branch, index) => (
                <div
                  className="font-semibold flex items-center justify-start hover:bg-slate-600 p-2 rounded"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  {branch}
                </div>
              ))}
            </div>
          )}
        </button>
      </div>

      {/* left section */}
      <div className="overflow-x-scroll overflow-y-hidden navscrollbar">
        <div
          className={`py-[8px] flex items-center justify-center   md:overflow-hidden  px-2 space-x-4 min-w-fit ${
            lightMode ? "text-black" : "text-gray-400"
          }`}
        >
          <button
            className={`rounded  ${
              lightMode ? "text-black " : " hover:bg-slate-900"
            }`}
          >
            {/* <IoMoonSharp style={{ fontSize: "20px" }} /> */}
            <label className="flex items-center justify-center">
              <input
                type="checkbox"
                className="appearance-none  peer "
                onChange={() => {
                  setLightMode(!lightMode);
                }}
              />
              <span
                className="w-12 flex flex-shrink-0 items-center p-1  rounded-full h-[2rem] after:h-[1.5rem] after:w-[1.5rem] after:rounded-full after:bg-white after:shadow-md peer-checked:bg-gray-200 bg-gray-700 duration-300 ease-in-out after:duration-300
                peer-checked:after:translate-x-[1rem] after:lightimage "
              ></span>
            </label>
          </button>
          <button
            className={`rounded p-[8px]  ${
              lightMode
                ? "text-black hover:bg-gray-200"
                : "hover:text-white hover:bg-slate-900"
            }`}
          >
            <FaBell style={{ fontSize: "20px" }} />
          </button>
          <button
            className={`rounded p-[8px]  ${
              lightMode
                ? "text-black hover:bg-gray-200"
                : "hover:text-white hover:bg-slate-900"
            }`}
          >
            {" "}
            <RiMessage2Fill style={{ fontSize: "20px" }} />
          </button>
          <button className="rounded p-[8px] text-white text-center bg-red-500 font-bold ">
            <MdExitToApp style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

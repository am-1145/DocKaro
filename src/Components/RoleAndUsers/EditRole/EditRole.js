import React, { useContext, useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import ColorContext from "../../../Context/colormode/colorContext";
import { GrMapLocation } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
const EditRole = () => {
  const { lightMode } = useContext(ColorContext);
  const branches = ["Delhi", "Bangalore"];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full  h-screen  ${
        lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
      }`}
    >
      <div
        className={`flex w-full h-[80px] py-[10px]  px-[8px] space-x-1 items-center justify-start  ${
          lightMode ? "bg-[#F8F9F9] text-black" : "bg-[#161d31] text-white"
        } `}
      >
        <FaUserAlt style={{ fontSize: "27px" }} />
        <span className="text-2xl">Users</span>
      </div>
      <div
        className={`w-full  py-[16px] px-[16px] ${
          lightMode ? "bg-[#F8F9F9] " : "bg-[#161d31] "
        } `}
      >
        <div className="flex w-full justify-start items-center py-5">
          <button
            className="bg-blue-500 text-white px-[8px] text-nowrap py-[5px] md:px-[12px] md:py-[6px] relative rounded"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="font-bold flex items-start justify-center space-x-3">
              <span className="pt-[3px]">
                <GrMapLocation fontSize={{ fontSize: "25px" }} />
              </span>
              <span>Select Branch </span>
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
        <div
          className={`border-b border-t py-3 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-3  ${
            lightMode
              ? "border-gray-200 text-black"
              : "border-gray-500 text-white"
          }`}
        >
          <div className="flex items-center justify-center space-x-2 ">
            <span className="font-semibold">Role Name</span>
            <input
              type="text"
              className={`${
                lightMode ? "border-gray-200" : "border-gray-500"
              } p-3 rounded-md bg-transparent border flex-1`}
            />
          </div>

          <div className="flex items-center justify-center space-x-2 ">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              className={`${
                lightMode ? "border-gray-200" : "border-gray-500"
              } p-3 rounded-md bg-transparent border flex-1`}
            />
          </div>

          <div className="flex items-center justify-center space-x-2 ">
            <span className="font-semibold">Email</span>
            <input
              type="text"
              className={`${
                lightMode ? "border-gray-200" : "border-gray-500"
              } p-3 rounded-md bg-transparent border flex-1`}
            />
          </div>

          <div className="flex items-center justify-center space-x-2 ">
            <span className="font-semibold">Password</span>
            <input
              type="text"
              className={`${
                lightMode ? "border-gray-200" : "border-gray-500"
              } p-3 rounded-md bg-transparent border flex-1`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRole;

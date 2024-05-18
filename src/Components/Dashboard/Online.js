import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import "./../../Styles/Sidebar.css";
import { FaMinus } from "react-icons/fa";

const Online = ({ role, open, setOpen }) => {
  const patients = [
    "demo",
    "demo",
    "demo",
    "demo",
    "demo",
    "demo",
    "demo",
    "demo",
    "demo",
  ];

  return (
    <div
      className={`${
        open ? "h-full" : "h-14"
      } py-0 px-2 box-border w-[50%] text-white rounded-lg bg-gray-700 transition-all ease-in-out duration-300`}
    >
      <div className="text-lg flex h-14 font-bold items-center justify-between py-2 px-0">
        <span>Online {role} </span>
        <button
          className="px-3 py-0 text-xl font-extrabold "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaMinus />
        </button>
      </div>
      <div
        className={`transition-all ease-in-out duration-300 vscrollbar  ${
          open
            ? "h-online overflow-scroll overflow-x-hidden opacity-100"
            : "h-0 overflow-hidden opacity-0"
        }`}
      >
        {patients.map((patient, index) => (
          <div key={index} className="p-2 w-full ">
            <div className="flex items-center justify-start space-x-2">
              <GiPlainCircle style={{ color: "green" }} />

              <span>{patient}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online;

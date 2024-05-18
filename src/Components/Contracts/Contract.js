import React, { useContext, useState } from "react";

// import { FaFileInvoice } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

import { LiaFileContractSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { BsFilePdfFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ColorContext from "../../Context/colormode/colorContext";
import ContractsTable from "./ContractsTable";

const Contracts = () => {
  const [individualSelected, setIndividualSelected] = useState(true);
  const { lightMode } = useContext(ColorContext);
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
        <LiaFileContractSolid style={{ fontSize: "27px" }} />
        <span className="text-2xl">Contracts</span>
      </div>
      <div
        className={`w-full bg-[#161d31] py-[16px] px-[16px] ${
          lightMode ? "bg-[#F8F9F9] " : "bg-[#161d31] "
        } `}
      >
        <div
          className={`rounded border w-full  ${
            lightMode
              ? "bg-white border-gray-200"
              : "bg-[#283046] border-gray-500"
          }`}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-between font-semibold  border-b  ${
              lightMode
                ? "text-black border-gray-200"
                : "border-gray-500 text-white"
            }`}
          >
            <div className="flex items-center justify-center space-x-3 space-y-0 ">
              <span>Contracts's Table</span>
              <div className="flex items-center justify-center space-x-2 space-y-0 text-sm font-light">
                <button
                  className={`${
                    individualSelected
                      ? "font-bold border-b-2 border-purple-500"
                      : ""
                  } transition-all duration-100 ease-in-out`}
                  onClick={() => {
                    setIndividualSelected(true);
                  }}
                >
                  Individual
                </button>
                <button
                  className={`${
                    !individualSelected
                      ? "font-bold border-b-2 border-purple-500"
                      : ""
                  } transition-all duration-100 ease-in-out`}
                  onClick={() => {
                    setIndividualSelected(false);
                  }}
                >
                  Public
                </button>
              </div>
            </div>
            <Link
              to={"/contracts/create"}
              className="bg-[#0448BB] flex text-white items-center px-2 py-1 rounded space-x-1 hover:shadow-md hover:shadow-purple-800"
            >
              <span>+</span>
              <span>Create</span>
            </Link>
          </div>

          {/* content */}
          <div className="flex p-[20px] flex-col justify-center items-start space-y-2">
            {/* <button className="w-full flex items-center justify-center rounded py-[5px] font-semibold text-white bg-[#0448BB] hover:shadow-md hover:shadow-purple-600 space-x-2">
              <span>
                {" "}
                <FaFileInvoice />{" "}
              </span>
              <span>Import/Export</span>
            </button> */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-center items-start py-3 w-full ">
              <div
                className={`flex items-center  justify-center space-x-1 ${
                  lightMode ? "text-black" : "text-white"
                }`}
              >
                <span>Show</span>
                <input
                  type="number"
                  className={`rounded py-2 px-1 w-12 focus:outline-none active:outline-none  ${
                    lightMode ? "bg-[#F8F9F9]" : "bg-slate-500"
                  }`}
                />
                <span>records</span>
              </div>
              <div className="h-12 font-semibold flex items-center justify-center  py-1 px-2 ">
                <button
                  className={`h-full px-2 py-1 flex items-center justify-center rounded-l  ${
                    lightMode
                      ? "bg-[#F8F9F9] hover:bg-gray-300 text-black"
                      : "bg-gray-500 hover:bg-slate-400 text-white"
                  }`}
                >
                  <span>
                    <IoIosCopy />
                  </span>
                  <span>Copy</span>
                </button>
                <button
                  className={`h-full px-2 py-1 flex items-center justify-center   ${
                    lightMode
                      ? "bg-[#F8F9F9] hover:bg-gray-300 text-black"
                      : "bg-gray-500 hover:bg-slate-400 text-white"
                  }`}
                >
                  <span>
                    <PiMicrosoftExcelLogo />
                  </span>
                  <span>Excel</span>
                </button>

                <button
                  className={`h-full px-2 py-1 flex items-center justify-center rounded-r  ${
                    lightMode
                      ? "bg-[#F8F9F9] hover:bg-gray-300 text-black"
                      : "bg-gray-500 hover:bg-slate-400 text-white"
                  }`}
                >
                  <span>
                    <BsFilePdfFill />
                  </span>
                  <span>PDF</span>
                </button>
              </div>
              <div
                className={`flex items-center  font-semibold justify-center space-x-2 ${
                  lightMode ? "text-black" : "text-white"
                }`}
              >
                <span>Search</span>
                <input
                  type="text"
                  className={`rounded border px-1 py-2 focus:outline-none active:outline-none  ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-slate-500 border-gray-500"
                  }`}
                />
              </div>
            </div>

            <button className="bg-[#0448BB] p-2 text-white rounded font-semibold flex items-center justify-center space-x-2">
              <FaGear style={{ fontSize: "1rem" }} />
              <span>Bulk Action</span>
              <FaChevronDown style={{ fontSize: "0.5rem" }} />
            </button>

            <div className="w-full">
              <ContractsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;

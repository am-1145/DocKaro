import React, { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";

import { IoIosCopy } from "react-icons/io";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { BsFilePdfFill } from "react-icons/bs";

import ColorContext from "../../Context/colormode/colorContext";
import HomeVisitTable from "./HomeVisitTable";
import { Link } from "react-router-dom";

const HomeVisit = () => {
  const [open, setOpen] = useState(false);
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
        <FaHome style={{ fontSize: "27px" }} />
        <span className="text-2xl">Home Visits</span>
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
            <span>Home Visit's Table</span>
            <Link
              to={"/homevisit/create"}
              className="bg-[#0448BB] flex text-white items-center px-2 py-1 rounded space-x-1 hover:shadow-md hover:shadow-[#0448BB]"
            >
              <span>+</span>
              <span>Create</span>
            </Link>
          </div>

          {/* content */}
          <div className="flex p-[20px] flex-col justify-center items-start space-y-2">
            <div className="w-full flex flex-col">
              <button
                className="w-full  flex items-center justify-center rounded py-[5px] font-semibold text-white bg-[#0448BB] hover:shadow-md hover:shadow-[#0448BB] space-x-2"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span> {/* <FaFileInvoice />{" "} */}</span>
                <span>Filters</span>
              </button>
              {
                <div
                  className={`${
                    open ? "max-h-[1000px] p-6 border border-t-0  " : "max-h-0"
                  } transition-all duration-300 ease-in-out bg-transparent rounded border-gray-500  grid grid-rows-1 grid-cols-4 gap-10 overflow-hidden`}
                >
                  <div
                    className={`w-full font-semibold space-y-2 ${
                      lightMode ? "text-black" : "text-white"
                    } duration-300  transition-all  ease-in-out ${
                      open
                        ? "w-full opacity-100 max-h-80"
                        : "opacity-0 max-h-0 "
                    }`}
                  >
                    <label htmlFor="">Viewed</label>
                    <input
                      type="text"
                      placeholder="Viewed"
                      className={`${
                        lightMode ? "border-gray-200" : "border-gray-500"
                      } border-2  w-full rounded bg-transparent p-2`}
                    />
                  </div>

                  <div
                    className={`w-full font-semibold space-y-2 ${
                      lightMode ? "text-black" : "text-white"
                    } duration-300  transition-all  ease-in-out ${
                      open
                        ? "w-full opacity-100 max-h-80"
                        : "opacity-0 max-h-0 "
                    }`}
                  >
                    <label htmlFor="">Status</label>
                    <input
                      type="text"
                      placeholder="Status"
                      className={`${
                        lightMode ? "border-gray-200" : "border-gray-500"
                      } border-2  w-full rounded bg-transparent p-2`}
                    />
                  </div>
                </div>
              }
            </div>
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
              {/* <DoctorTable /> */}
              {/* <PackagesTable /> */}
              {/* <InvoicesTable /> */}
              <HomeVisitTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVisit;

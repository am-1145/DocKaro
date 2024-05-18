import React, { useContext } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import ColorContext from "../../Context/colormode/colorContext";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const CreateBranch = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`w-full  h-screen  ${
        lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
      }`}
    >
      <div
        className={`flex w-full h-[80px] py-[10px] px-[8px] space-x-1 items-center justify-start  ${
          lightMode ? "bg-[#F8F9F9] text-black" : "bg-[#161d31]  text-white"
        }`}
      >
        <FaMapMarkedAlt style={{ fontSize: "27px" }} />
        <span className="text-2xl">Create Branch</span>
      </div>
      <div
        className={`w-full  py-[16px] px-[16px] ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        }`}
      >
        <div
          className={`rounded border w-full  border-gray-500  ${
            lightMode ? "bg-white text-black" : "text-white bg-[#283046]"
          }`}
        >
          {/* content */}

          <div className="py-[20px] px-20 flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-1  lg:gap-3">
            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaMapMarkedAlt />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Branch Name"
              />
            </div>
            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaPhoneAlt />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <IoLocation />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Address"
              />
            </div>

            {/* <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Cultures </span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Enter Culture Name"
              />
            </div> */}

            {/* <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Payment Method</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Payment method"
              />
            </div> */}
          </div>

          <div className="flex p-2 items-center justify-center w-full px-[88px] pb-[28px]  ">
            <textarea
              name=""
              id=""
              placeholder="Enter Comments Here...."
              className={`w-full h-full p-2  rounded ${
                lightMode ? "bg-[#F8F9F9]" : "bg-gray-700"
              }`}
            ></textarea>
          </div>

          <div className="flex p-2 items-center justify-start w-full px-[88px] pb-[28px]  ">
            <button className="p-2 w-32 bg-[#0448BB] rounded text-white font-bold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBranch;

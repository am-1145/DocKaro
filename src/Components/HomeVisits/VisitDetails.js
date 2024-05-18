import React, { useContext } from "react";
import ColorContext from "../../Context/colormode/colorContext";
import { IoLocation } from "react-icons/io5";
const VisitDetails = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`rounded border w-full ${
        lightMode ? "bg-white border-gray-200" : "bg-[#283046] border-gray-500"
      } `}
    >
      <div
        className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
          lightMode
            ? "text-black border-gray-200"
            : "text-white border-gray-500"
        } border-b `}
      >
        <span>Visit Details</span>
      </div>

      {/* content */}
      <div
        className={`px-[20px] py-[10px]  ${
          lightMode ? "text-black" : "text-white"
        } grid grid-rows-2 grid-cols-3 gap-y-0 gap-x-3`}
      >
        <div className="flex items-center justify-center ">
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

        <div className="flex items-center justify-center col-span-2  ">
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

        <div
          className={`flex flex-col space-y-2 items-start justify-center ${
            lightMode ? "text-black" : "text-white"
          } `}
        >
          <div className="font-semibold ">Tests</div>
          <input
            type="text"
            className={`p-2 w-full rounded-md border  h-12  ${
              lightMode
                ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                : "text-gray-200 bg-gray-700 border-gray-500"
            }`}
            placeholder="Enter Test"
          />
        </div>

        <div
          className={`flex flex-col space-y-2 items-start justify-center ${
            lightMode ? "text-black" : "text-white"
          } `}
        >
          <div className="font-semibold ">Packages</div>
          <input
            type="text"
            className={`p-2 w-full rounded-md border  h-12  ${
              lightMode
                ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                : "text-gray-200 bg-gray-700 border-gray-500"
            }`}
            placeholder="Enter Packages"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitDetails;

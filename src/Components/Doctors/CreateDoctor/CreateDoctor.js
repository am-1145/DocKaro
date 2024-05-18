import React, { useContext } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import ColorContext from "../../../Context/colormode/colorContext";

const CreateDoctor = () => {
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
        <FaUserDoctor style={{ fontSize: "27px" }} />
        <span className="text-2xl">Create New Doctor</span>
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

          <div className="py-[20px] px-20 flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-2  lg:gap-3">
            <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Doctor Name</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Enter Doctor Name"
              />
            </div>

            <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Email Address</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Email Address"
              />
            </div>

            <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Phone Number</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Phone Number"
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

            <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Address</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Address"
              />
            </div>

            <div className="flex flex-col items-start justify-center p-2 space-y-1">
              <span className="font-semibold ">Commission</span>
              <input
                type="text"
                className={`p-2 rounded-md  h-12  w-full  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700"
                    : "text-gray-200 bg-gray-700"
                }`}
                placeholder="Commission"
              />
            </div>
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

export default CreateDoctor;

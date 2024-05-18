import React, { useContext } from "react";
import { LiaFileContractSolid } from "react-icons/lia";
import ColorContext from "../../Context/colormode/colorContext";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BsGenderMale } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import VisitDetails from "./VisitDetails";
import Attachment from "./Attachment";
import ModalhvContext from "../../Context/modalhv/modalhvContext";
const CreateHomeVisit = () => {
  const { lightMode } = useContext(ColorContext);
  const { setOpenhvModal } = useContext(ModalhvContext);
  return (
    <div
      className={`w-full h-screen   border ${
        lightMode
          ? "bg-[#F8F9F9] border-gray-200"
          : "bg-[#161d31] border-gray-400"
      }`}
    >
      <div
        className={`flex w-full h-[80px] py-[10px] ${
          lightMode ? "text-black" : "text-white"
        } px-[8px] space-x-1 items-center justify-start ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        }`}
      >
        <LiaFileContractSolid style={{ fontSize: "27px" }} />
        <span className="text-2xl">Home Visits</span>
      </div>
      <div
        className={`w-full ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        } py-[16px] px-[16px]`}
      >
        <div
          className={`rounded border w-full ${
            lightMode
              ? "bg-white border-gray-200"
              : "bg-[#283046] border-gray-500"
          } `}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
              lightMode
                ? "text-black border-gray-200"
                : "text-white border-gray-500"
            } border-b `}
          >
            <span>Create home visit</span>
          </div>

          {/* content */}
          <div className="px-[20px] py-[12px] space-y-10">
            {/* <div
              className={`w-full ${
                lightMode ? "text-black" : "text-white"
              } font-bold space-y-2 flex-col items-start justify-center`}
            >
              <div>Title</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Contract Title"
                className={` placeholder:font-light border bg-transparent p-2 rounded-md w-full ${
                  lightMode
                    ? "text-black border-gray-200"
                    : "text-white border-gray-500"
                }`}
              />
            </div> */}

            {/* text
            <div
              className={`${lightMode ? "text-black" : "text-white"} border-0`}
            >
              <TextEditor />
            </div>

            <Discount /> */}

            <div
              className={`w-full  font font-semibold ${
                lightMode ? "text-black" : "text-white"
              } `}
            >
              <div className="font-semibold flex items-center justify-between w-full">
                <span>Search Patient</span>
                <button
                  className="p-2 text-white bg-yellow-600 rounded-md font-semibold"
                  onClick={() => {
                    setOpenhvModal(true);
                  }}
                >
                  Not Listed?
                </button>
              </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="Select Patient"
                className={` placeholder:font-light border bg-transparent p-2 rounded-md w-full ${
                  lightMode
                    ? "text-black border-gray-200"
                    : "text-white border-gray-500"
                }`}
              />
            </div>

            <div
              className={`w-full grid grid-rows-2 grid-cols-3 gap-6  ${
                lightMode ? "text-black" : "text-white"
              }`}
            >
              <div className="flex items-center justify-center ">
                <span
                  className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Enter Patient Name"
                />
              </div>

              {/* 2
               */}

              <div className="flex items-center justify-center ">
                <span
                  className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <FaPhone />
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

              {/* 2
               */}

              <div className="flex items-center justify-center ">
                <span
                  className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <BsGenderMale />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Select Gender"
                />
              </div>

              {/* 2
               */}

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

              {/* 2
               */}

              <div className="flex items-center justify-center ">
                <span
                  className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <MdOutlineMail />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Select Email"
                />
              </div>

              {/* 2
               */}

              <div className="flex items-center justify-center ">
                <span
                  className={`h-12 rounded-l-md border border-r-0  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <FaChild />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0 h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Date of Birth"
                />
              </div>
              {/* end of inside grid  */}
            </div>

            {/* start of visit details  */}
            <VisitDetails />
            <Attachment />
            {/* end of inside contact  */}
            <div className="w-full">
              <button className="p-2 w-28 bg-[#0448BB] rounded text-white font-bold">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHomeVisit;

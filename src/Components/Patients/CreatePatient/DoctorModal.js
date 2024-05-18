import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import DoctorModalContext from "../../../Context/doctormodal/doctormodalContext";
import ColorContext from "../../../Context/colormode/colorContext";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
// import { FaChild } from "react-icons/fa";

const DoctorModal = () => {
  const { setOpendModal } = useContext(DoctorModalContext);
  const { lightMode } = useContext(ColorContext);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-20"></div>

      {/* Modal content */}
      <div
        className={`p-5 bg-[#161d31] z-50 rounded-lg border border-gray-500 ${
          lightMode ? "bg-gray-300 " : "bg-[#161d31]"
        }`}
      >
        <div
          className={`${
            lightMode
              ? "bg-gray-200 border-gray-300"
              : " bg-[#283046] border-gray-500"
          } z-50  rounded-lg  border`}
        >
          <div
            className={`font-semibold  px-5 flex items-center justify-between py-3 border-b ${
              lightMode
                ? "text-black border-gray-300"
                : "text-white border-gray-500 "
            }`}
          >
            <span>Create Doctor</span>
            <button
              onClick={() => {
                setOpendModal(false);
              }}
              className="p-2 rounded-full flex items-center justify-center"
            >
              <ImCross style={{ fontSize: "0.7rem" }} />
            </button>
          </div>
          <div
            className={`${
              lightMode ? " text-black" : "text-white"
            } px-5 py-3 grid grid-rows-2 grid-cols-3 gap-4 `}
          >
            <div className="flex items-center justify-center p-2">
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
                placeholder="Enter Doctor Name"
              />
            </div>

            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0 flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaPhone />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md  h-12 flex-1 border border-l-0  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0 flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaPhone />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md  h-12 flex-1 border border-l-0  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Email Address"
              />
            </div>

            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0 flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaPhone />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md  h-12 flex-1 border border-l-0  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Address"
              />
            </div>

            <div className="flex items-center justify-center p-2">
              <span
                className={`h-12 rounded-l-md border border-r-0 flex items-center justify-center px-3 ${
                  lightMode
                    ? "bg-[#F8F9F9] border-gray-200"
                    : "bg-gray-700 border-gray-500"
                }`}
              >
                <FaPhone />
              </span>
              <input
                type="text"
                className={`p-2 rounded-r-md  h-12 flex-1 border border-l-0  ${
                  lightMode
                    ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                    : "text-gray-200 bg-gray-700 border-gray-500"
                }`}
                placeholder="Enter Commission"
              />
            </div>
          </div>

          <div
            className={` w-full px-5 py-3 flex justify-between border-t ${
              lightMode ? "border-gray-200" : "border-gray-500"
            }`}
          >
            <button className=" bg-blue-500 text-white p-3 font-semibold rounded-md">
              Save
            </button>
            <button
              onClick={() => {
                setOpendModal(false);
              }}
              className=" bg-red-500 text-white p-3 font-semibold rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;

import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import ColorContext from "../../../Context/colormode/colorContext";
import { FaUserInjured } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import ModalhvContext from "../../../Context/modalhv/modalhvContext";
const ModalHV = () => {
  const { lightMode } = useContext(ColorContext);
  const { setOpenhvModal } = useContext(ModalhvContext);
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
          {/* content start  */}
          <div
            className={`w-full bg-transparent ${
              lightMode ? " text-black " : "text-white "
            } flex justify-end px-2 py-2 `}
          >
            <button
              onClick={() => {
                setOpenhvModal(false);
              }}
            >
              <ImCross style={{ fontSize: "20px" }} />
            </button>
          </div>
          <div
            className={`rounded border w-full    ${
              lightMode
                ? "bg-white text-black border-gray-300"
                : "text-white bg-[#283046] border-gray-500"
            }`}
          >
            {/* content */}
            <div
              className={`flex flex-col py-[20px] px-20  rounded-b-lg justify-center items-start space-y-2 ${
                lightMode ? "bg-[#F8F9F9]" : "bg-gray-700"
              }`}
            >
              <span className="font-semibold text-xl">
                Register New Patient
              </span>
              <div className="flex items-center justify-center w-full">
                <input
                  type="text"
                  className={`rounded h-10 border w-[90%]  p-3 ${
                    lightMode
                      ? "bg-white border-gray-200"
                      : "bg-[#283046] border-gray-500"
                  }`}
                  placeholder="Search Patient by phone number or name"
                />
                <button className="h-10 rflex items-center justify-center rounded flex-1 bg-[#0448BB]  text-white font-semibold">
                  Search
                </button>
              </div>
            </div>
            <div className="py-[20px] px-20 flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-5 ">
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
                  placeholder="Enter Patient Name"
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

              <div className="flex flex-col items-start justify-center row-span-2  p-6 space-y-3">
                <span className="text-lg font-semibold">Gender</span>
                <div className="w-full flex items-center justify-start space-x-2">
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="other">Other</label>
                  <input type="radio" name="gender" id="other" value="other" />
                </div>
              </div>

              <div className="flex items-center justify-center p-2">
                <span
                  className={`h-12 rounded-l-md border-r-0 border  flex items-center justify-center px-3 ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  <FaChild />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border-l-0 border  h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200 text-gray-700"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Enter Age"
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
                  <FaChild />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0  h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="Enter D.O.B"
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
                  <FaUserInjured />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0  h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="enter text here"
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
                  <FaUserInjured />
                </span>
                <input
                  type="text"
                  className={`p-2 rounded-r-md border border-l-0  h-12 flex-1  ${
                    lightMode
                      ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                      : "text-gray-200 bg-gray-700 border-gray-500"
                  }`}
                  placeholder="enter text here"
                />
              </div>

              <div className="flex flex-col items-center justify-center row-span-3 p-6 space-y-3">
                <div className="flex flex-col w-full items-start justify-center space-y-0">
                  <div className="text-lg font-semibold flex items-center justify-between w-full">
                    <span>Doctor</span>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md font-semibold">
                      Not Listed?
                    </button>
                  </div>
                  <input
                    type="text"
                    className={`p-2 rounded-md border  w-full h-12 flex-1  ${
                      lightMode
                        ? "bg-[#F8F9F9] border-gray-200 text-gray-700"
                        : "bg-gray-700 border-gray-500 text-gray-200 "
                    }`}
                    placeholder="enter text here"
                  />
                </div>
                <div className="flex items-center justify-center  w-full">
                  {/* <span className="h-12 rounded-l-md font-semibold flex items-center justify-center px-3">
                  Select Contract
                </span> */}
                  <input
                    type="text"
                    className={`p-2 rounded-md border  h-12 flex-1 ${
                      lightMode
                        ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                        : "bg-gray-700 border-gray-500   text-gray-200"
                    }`}
                    placeholder="Select Contract"
                  />
                </div>
              </div>

              <div className="flex p-2 items-center justify-center row-span-2 col-span-2">
                <textarea
                  name=""
                  id=""
                  className={`w-full h-full border  p-2  rounded ${
                    lightMode
                      ? "bg-[#F8F9F9] border-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                ></textarea>
              </div>
            </div>
          </div>
          {/* content end  */}
        </div>
      </div>
    </div>
  );
};

export default ModalHV;

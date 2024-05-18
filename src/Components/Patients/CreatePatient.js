import React, { useContext } from "react";
import { FaUserInjured } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import ColorContext from "../../Context/colormode/colorContext";
import TestTablePatient from "./CreatePatient/TestTablePatient";
import PackagesTablePatient from "./CreatePatient/PackagesTablePatient";
import ModalContext from "../../Context/patientmodal/modalContext";
import DoctorModalContext from "../../Context/doctormodal/doctormodalContext";

const CreatePatient = () => {
  const { lightMode } = useContext(ColorContext);
  const { setOpenModal } = useContext(ModalContext);
  const { setOpendModal } = useContext(DoctorModalContext);
  return (
    <>
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
          <FaUserInjured style={{ fontSize: "27px" }} />
          <span className="text-2xl">Create New Patient</span>
        </div>
        <div
          className={`w-full  py-[16px] px-[16px] ${
            lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
          }`}
        >
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
                <button className="h-10 rflex items-center justify-center rounded flex-1 bg-[#0448BB] ml-2 text-white font-semibold">
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
                    <button
                      className="bg-blue-600 text-white px-2 py-1 mb-2 rounded-md font-semibold"
                      onClick={() => {
                        setOpendModal(true);
                      }}
                    >
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

          {/* content here  */}
          <div
            className={`py-7 flex w-full items-center justify-center  ${
              lightMode ? "text-black" : "text-white"
            } `}
          >
            <div className="w-[50%] pr-2">
              <div
                className={` border   rounded-md ${
                  lightMode
                    ? "bg-white border-gray-200"
                    : "bg-[#283046] border-gray-500"
                }`}
              >
                <div
                  className={`font-semibold border-b px-6 pt-3 pb-4 ${
                    lightMode ? "border-gray-200" : "border-gray-500 "
                  }`}
                >
                  Tests
                </div>
                <div
                  className={`w-full px-6 py-4 border-b ${
                    lightMode ? "border-gray-200" : "border-gray-500"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Tests"
                    className={`${
                      lightMode ? "border-gray-200" : "border-gray-500"
                    } border-2  w-full rounded bg-transparent p-2`}
                  />
                </div>
                <div className="py-4 px-6">
                  <TestTablePatient />
                </div>
              </div>
            </div>
            <div className="w-[50%] pl-2">
              <div
                className={` border   rounded-md ${
                  lightMode
                    ? "bg-white border-gray-200"
                    : "bg-[#283046] border-gray-500"
                }`}
              >
                <div
                  className={`font-semibold border-b px-6 pt-3 pb-4 ${
                    lightMode ? "border-gray-200" : "border-gray-500 "
                  }`}
                >
                  Packages
                </div>
                <div
                  className={`w-full px-6 py-4 border-b ${
                    lightMode ? "border-gray-200" : "border-gray-500"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Packages"
                    className={`${
                      lightMode ? "border-gray-200" : "border-gray-500"
                    } border-2  w-full rounded bg-transparent p-2`}
                  />
                </div>
                <div className="py-4 px-6">
                  <PackagesTablePatient />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="p-2 w-32 bg-[#0448BB] rounded text-white font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePatient;

// PatientTable.js

import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const ContractsTable = () => {
  const contracts = [
    {
      id: 1,
      title: "none",
    },
  ];

  const { lightMode } = useContext(ColorContext);
  return (
    <div
      className={` overflow-x-scroll border border-gray-400 overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700 ">
        <thead className={`${lightMode ? "bg-[#F8F9F9]" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-0 w-[3%] text-center  text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              {/* checkbox below this header  */}
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Sno.
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium w-[80%]  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Title
            </th>

            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody
          className={`${
            lightMode ? "bg-[#F8F9F9] text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {contracts.map((contract, index) => (
            <tr
              key={index}
              className={
                lightMode
                  ? index % 2 === 0
                    ? "bg-[#F8F9F9] text-center"
                    : "bg-white text-center"
                  : index % 2 === 0
                  ? "bg-[#161d31] text-center"
                  : "bg-[#283046] text-center"
              }
            >
              <td className="py-4 pl-3 pr-0 text-sm">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="py-4 px-6 text-sm ">{index + 1}</td>
              <td className="py-4 px-6 text-sm ">{contract.title}</td>

              <td className="py-4 px-6 text-sm text-white">
                {/* Add action buttons (e.g., edit, delete) */}
                <button className="bg-blue-500 p-2 rounded">
                  <FaEdit style={{ fontSize: "1rem" }} />
                </button>
                <button className="bg-red-500 p-2 ml-2 rounded">
                  <MdDelete style={{ fontSize: "1rem" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsTable;

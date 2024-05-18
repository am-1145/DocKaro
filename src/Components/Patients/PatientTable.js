// PatientTable.js

import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const PatientTable = () => {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      contract: "Contract Details 1",
      total: 1200,
      paid: 800,
      due: 400,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "555-123-4567",
      email: "alice.johnson@example.com",
      contract: "Contract Details 3",
      total: 800,
      paid: 600,
      due: 200,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 300,
    },
  ];

  const { lightMode } = useContext(ColorContext);
  return (
    <div
      className={` overflow-x-scroll border-gray-400  border overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700 ">
        <thead className={`${lightMode ? "bg-[#FAF9F9]" : "bg-gray-800"}`}>
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
              S.NO
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Name
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Phone
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Email
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Contract
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Total
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Paid
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Due
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
            lightMode ? "bg-[#FAF9F9] text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {patients.map((patient, index) => (
            <tr
              key={index}
              className={
                lightMode
                  ? index % 2 === 0
                    ? "bg-[#FAF9F9] text-center"
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
              <td className="py-4 px-6 text-sm ">{patient.name}</td>
              <td className="py-4 px-6 text-sm ">{patient.phone}</td>
              <td className="py-4 px-6 text-sm ">{patient.email}</td>
              <td className="py-4 px-6 text-sm ">{patient.contract}</td>
              <td className="py-4 px-6 text-sm ">{patient.total}</td>
              <td className="py-4 px-6 text-sm ">{patient.paid}</td>
              <td className="py-4 px-6 text-sm ">{patient.due}</td>
              <td className="py-4 px-6 text-sm text-white">
                {/* Add action buttons (e.g., edit, delete) */}
                <button className="bg-[#1A73E8] p-2 rounded">
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

export default PatientTable;

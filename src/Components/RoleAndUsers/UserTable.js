// UserTable.js

import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const UserTable = () => {
  const data = [
    {
      serialnumber: 1,
      name: "Ankit Maurya",
      email: "am1145cse@gmail.com",
      roles: ["Admin", "Editor"],
      branches: ["Branch A", "Branch B"],
    },
    {
      serialnumber: 2,
      name: "Aradhya",
      email: "aradhya@example.com",
      roles: ["Manager"],
      branches: ["Branch C"],
    },
    // Add more data as needed
  ];

  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`overflow-x-scroll border-gray-400 border overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className={`${lightMode ? "bg-[#FAF9F9]" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-0 w-[3%] text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              {/* checkbox below this header */}
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Serial Number
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Name
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Email
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Roles
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Branches
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
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
          {data.map((item, index) => (
            <tr
              key={index}
              className={
                lightMode
                  ? index % 2 === 0
                    ? "bg-[#FAF9F9] "
                    : "bg-white"
                  : index % 2 === 0
                  ? "bg-[#161d31]"
                  : "bg-[#283046]"
              }
            >
              <td className="py-4 pl-3 pr-0 text-sm text-center">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="py-4 px-6 text-sm text-center">
                {item.serialnumber}
              </td>
              <td className="py-4 px-6 text-sm text-center">{item.name}</td>
              <td className="py-4 px-6 text-sm text-center">{item.email}</td>
              <td className="py-4 px-6 text-sm text-center">
                <ul className="list-disc pl-4">
                  {item.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="mb-1">
                      {role}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-4 px-6 text-sm text-center">
                <ul className="list-disc pl-4">
                  {item.branches.map((branch, branchIndex) => (
                    <li key={branchIndex} className="mb-1">
                      {branch}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-4 px-6 text-sm text-white text-center">
                {/* Add action buttons (e.g., edit, delete) */}
                <button className="bg-[#1A73E8] p-2 rounded">
                  <FaEdit style={{ fontSize: "1rem" }} />
                </button>
                <button className="bg-red-700 p-2 ml-2 rounded">
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

export default UserTable;

import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const PackagesTable = () => {
  const packages = [
    {
      id: 1,
      serialNumber: 101,
      name: "Package A",
      shortcut: "A",
      tests: ["Test A", "Test B"],
      price: 100,
    },
    {
      id: 2,
      serialNumber: 102,
      name: "Package B",
      shortcut: "B",
      tests: ["Test C", "Test D", "Test E"],
      price: 150,
    },
    {
      id: 3,
      serialNumber: 103,
      name: "Package C",
      shortcut: "C",
      tests: ["Test F"],
      price: 200,
    },
    // Add more package data as needed
  ];

  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`overflow-x-scroll border border-gray-400 overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700">
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
              className={`py-3 px-6 text-center w-[5%] text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Sno.
            </th>
            <th
              className={`py-3 px-6 text-center w-[25%] text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Name
            </th>
            <th
              className={`py-3 px-6 text-center w-[25%] text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Shortcut
            </th>
            <th
              className={`py-3 px-6 text-center w-[25%] text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Tests
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Price
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
            lightMode ? "bg-[#F8F9F9] text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {packages.map((pack, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? `${
                      lightMode
                        ? "bg-[#F8F9F9] text-center"
                        : "bg-[#161d31]  text-center"
                    }`
                  : `${
                      lightMode
                        ? "bg-white text-center"
                        : "bg-[#283046] text-center"
                    }`
              }
            >
              <td className="py-4 pl-3 pr-0 text-sm">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="py-4 px-6 text-sm">{pack.serialNumber}</td>
              <td className="py-4 px-6 text-sm">{pack.name}</td>
              <td className="py-4 px-6 text-sm">{pack.shortcut}</td>
              <td className="py-4 px-6 text-sm">
                <ul style={{ listStyleType: "disc", marginLeft: "1rem" }}>
                  {pack.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </td>
              <td className="py-4 px-6 text-sm">{pack.price}</td>
              <td className="py-4 px-6 text-sm text-white">
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

export default PackagesTable;

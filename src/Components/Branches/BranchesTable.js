import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const BranchesTable = () => {
  const branches = [
    {
      id: 1,
      serialNumber: 101,
      name: "Branch A",
      phone: "123-456-7890",
      address: "456 Oak St",
    },
    {
      id: 2,
      serialNumber: 102,
      name: "Branch B",
      phone: "987-654-3210",
      address: "789 Pine St",
    },
    // Add more branch data here if needed
  ];

  const { lightMode } = useContext(ColorContext);
  const [isChecked, setIsChecked] = useState(
    new Array(branches.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  return (
    <div
      className={`overflow-x-scroll border-gray-400 border overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className={`${lightMode ? "bg-[#F8F9F9]" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-0 w-[3%] text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              {/* Checkbox below this header */}
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              S.NO
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
              Phone
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Address
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
          {branches.map((branch, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? `${
                      lightMode
                        ? "bg-[#F8F9F9] text-center"
                        : "bg-[#161d31] text-center"
                    }`
                  : `${
                      lightMode
                        ? "bg-white text-center"
                        : "bg-[#283046] text-center"
                    }`
              }
            >
              <td className="py-4 pl-3 pr-0 text-sm">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={isChecked[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className="py-4 px-6 text-sm">{branch.serialNumber}</td>
              <td className="py-4 px-6 text-sm">{branch.name}</td>
              <td className="py-4 px-6 text-sm">{branch.phone}</td>
              <td className="py-4 px-6 text-sm">{branch.address}</td>
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

export default BranchesTable;

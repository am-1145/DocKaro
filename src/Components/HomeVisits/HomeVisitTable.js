import React, { useContext, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import ColorContext from "../../Context/colormode/colorContext";
import ToggleSwitch from "./ToggleSwitch";

const HomeVisitTable = () => {
  const data = [
    {
      sno: 1,
      patientName: "John Doe",
      phone: 292929,
      address: "123 Main St, City",
      dov: "2024-03-28",
      viewed: true,
      status: true,
      action: "Action 1",
    },
    {
      sno: 2,
      patientName: "Jane Smith",
      phone: 213213213,
      address: "456 Elm St, Town",
      dov: "2024-03-28",
      viewed: false,
      status: false,
      action: "Action 2",
    },
    // Add more entries as needed
  ];

  const { lightMode } = useContext(ColorContext);

  // Create state for checkboxes
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );

  // Handle checkbox change for each row
  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  const [statuses, setStatuses] = useState(data.map(() => false));

  const handleStatusChange = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);
  };
  return (
    <div
      className={`lg:overflow-visible overflow-x-scroll overflow-y-scroll border-gray-400 border ${
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
            ></th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              S.no
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Patient Name
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
              Visit Date
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Viewed
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Status
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
          {data.map((item, index) => (
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
                <input
                  type="checkbox"
                  checked={isChecked[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className="py-4 px-6 text-sm">{item.sno}</td>
              <td className="py-4 px-6 text-sm">{item.patientName}</td>
              <td className="py-4 px-6 text-sm">{item.phone}</td>
              <td className="py-4 px-6 text-sm">{item.address}</td>
              <td className="py-4 px-6 text-sm">{item.dov}</td>
              <td className="py-4 px-6 text-sm">
                {item.viewed ? (
                  <div className="flex items-center justify-center">
                    <BsCheckCircleFill style={{ color: "green" }} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <ImCross style={{ color: "red" }} />
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-sm">
                <ToggleSwitch
                  checked={statuses[index]}
                  setChecked={() => handleStatusChange(index)}
                />
              </td>
              <td className="py-4 px-6 text-sm text-white">
                <button className="bg-[#0448BB] p-2 ml-2 rounded flex space-x-2 items-center justify-center relative">
                  <FaGear />
                  <span className="font-semibold mx-1 text-white">Action</span>
                  <FaChevronDown style={{ fontSize: "0.4rem" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeVisitTable;

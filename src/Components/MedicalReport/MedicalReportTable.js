import React, { useContext, useState } from "react";

import { FaGear } from "react-icons/fa6";

import ColorContext from "../../Context/colormode/colorContext";
import { ImCross } from "react-icons/im";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const MedicalReportTable = () => {
  const data = [
    {
      id: 1,
      createdBy: "Dr. Smith",
      contract: "MR123",
      patientCode: "P001",
      patientName: "Alice Smith",
      gender: "Female",
      age: 35,
      ageUnit: "years",
      phone: "1234567890",
      tests: ["Blood Test", "X-Ray"],
      date: "2024-03-22",
      done: true,
      signed: true,
      signedBy: "Dr. Johnson",
      serialNumber: 1,
    },
    {
      id: 2,
      serialNumber: 1,
      createdBy: "Dr. Smith",
      contract: "MR123",
      patientCode: "P001",
      patientName: "Alice Smith",
      gender: "Female",
      age: 35,
      ageUnit: "years",
      phone: "1234567890",
      tests: ["Blood Test", "X-Ray"],
      date: "2024-03-22",
      done: false,
      signed: false,
      signedBy: "",
    },
  ];

  const { lightMode } = useContext(ColorContext);
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  const [expandedRow, setExpandedRow] = useState(null);

  const handleToggleDropdown = (index) => {
    if (expandedRow === index) {
      // Close dropdown if it's already open
      setExpandedRow(null);
    } else {
      // Open dropdown for the clicked row
      setExpandedRow(index);
    }
  };
  return (
    <div
      className={`lg:overflow-visible overflow-x-scroll overflow-y-scroll    border-gray-400  border   ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y  divide-gray-700">
        <thead className={`${lightMode ? "bg-[#F8F9F9]" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-0 w-[3%] text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              {/* checkbox below this header */}
            </th>
            <th
              className={`py-3 px-1 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              S.NO
            </th>
            <th
              className={`py-3 px-1 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Created By
            </th>
            <th
              className={`py-3 px-1 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Contract
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Patient Code
            </th>
            <th
              className={`py-3 px-3 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Patient Name
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Gender
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Age
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Age Unit
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
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
              Tests
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Date
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Done
            </th>
            <th
              className={`py-3 px-2 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Signed
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Signed By
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
              <td className="py-4 px-6 text-sm">{item.serialNumber}</td>
              <td className="py-4 px-6 text-sm">{item.createdBy}</td>
              <td className="py-4 px-6 text-sm">{item.contract}</td>
              <td className="py-4 px-6 text-sm">{item.patientCode}</td>
              <td className="py-4 px-6 text-sm">{item.patientName}</td>
              <td className="py-4 px-6 text-sm">{item.gender}</td>
              <td className="py-4 px-6 text-sm">{item.age}</td>
              <td className="py-4 px-6 text-sm">{item.ageUnit}</td>
              <td className="py-4 px-6 text-sm text-nowrap">{item.phone}</td>
              <td className="py-4 px-6 text-sm text-nowrap">
                <ul style={{ listStyleType: "disc", marginLeft: "1rem" }}>
                  {item.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </td>
              <td className="py-4 px-6 text-sm text-nowrap">{item.date}</td>
              <td className="py-4 px-6 text-sm text-center">
                {item.done ? (
                  <div className="flex items-center justify-center">
                    <BsCheckCircleFill style={{ color: "green" }} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <ImCross style={{ color: "red" }} />
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-sm text-center">
                {item.signed ? (
                  <div className="flex items-center justify-center">
                    <BsCheckCircleFill style={{ color: "green" }} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <ImCross style={{ color: "red" }} />
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-sm">{item.signedBy}</td>
              <td className="py-4 px-6 text-sm text-white">
                <button
                  className="bg-[#0448BB] p-2 ml-2 rounded flex space-x-2 items-center justify-center relative"
                  onClick={() => handleToggleDropdown(index)}
                >
                  <FaGear />
                  <FaChevronDown style={{ fontSize: "0.4rem" }} />
                  {expandedRow === index && (
                    <div
                      className={`absolute text-nowrap top-full overflow-visible z-[200] flex items-center justify-center flex-col ${
                        lightMode
                          ? " bg-white text-black font-semibold"
                          : "bg-gray-700 text-white font-semibold"
                      }`}
                    >
                      <div className="p-2 ">Edit</div>
                      <div className="p-2">Print Report</div>
                      <div className="p-2">Send Report</div>
                    </div>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalReportTable;

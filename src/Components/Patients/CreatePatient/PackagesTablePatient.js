import React, { useContext } from "react";
import ColorContext from "../../../Context/colormode/colorContext";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

const PackagesTablePatient = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`overflow-x-scroll overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className={`${lightMode ? "bg-gray-200" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-6 text-left text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Name
            </th>

            <th
              className={`py-3 px-6 text-left text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody
          className={`${
            lightMode ? "bg-gray-200 text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {/* {doctors.map((doctor, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? `${lightMode ? "bg-gray-200" : "bg-gray-600"}`
                  : `${lightMode ? "bg-white" : "bg-gray-700"}`
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
              <td className="py-4 px-6 text-sm">{doctor.serialNumber}</td>
              <td className="py-4 px-6 text-sm">{doctor.name}</td>
              <td className="py-4 px-6 text-sm">{doctor.phone}</td>
              <td className="py-4 px-6 text-sm">{doctor.email}</td>
              <td className="py-4 px-6 text-sm">{doctor.address}</td>
              <td className="py-4 px-6 text-sm">{doctor.commission}</td>
              <td className="py-4 px-6 text-sm">{doctor.total}</td>
              <td className="py-4 px-6 text-sm">{doctor.paid}</td>
              <td className="py-4 px-6 text-sm">{doctor.due}</td>
              <td className="py-4 px-6 text-sm text-white">
                <button className="bg-blue-500 p-2 rounded">
                  <FaEdit style={{ fontSize: "1rem" }} />
                </button>
                <button className="bg-red-500 p-2 ml-2 rounded">
                  <MdDelete style={{ fontSize: "1rem" }} />
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesTablePatient;

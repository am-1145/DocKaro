import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const DoctorTable = () => {
  const doctors = [
    {
      id: 1,
      serialNumber: 101,
      name: "Dr. Ankit",
      phone: "123-456-7890",
      email: "dr.ankit@example.com",
      address: "123 Varanasi",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 2,
      serialNumber: 102,
      name: "Dr. Shubham",
      phone: "123-456-7890",
      email: "dr.smith@example.com",
      address: "123 Main St",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 3,
      serialNumber: 103,
      name: "Dr. Anuja",
      phone: "123-459-7890",
      email: "dr.anuja@example.com",
      address: "123 Pune",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 4,
      serialNumber: 104,
      name: "Dr. Janhavi",
      phone: "123-456-7890",
      email: "dr.janh@example.com",
      address: "123 Bang",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 5,
      serialNumber: 105,
      name: "Dr. Rajat",
      phone: "123-456-7890",
      email: "dr.rajat@example.com",
      address: "123 Main St",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 1,
      serialNumber: 101,
      name: "Dr. Smith",
      phone: "123-456-7890",
      email: "dr.smith@example.com",
      address: "123 Main St",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 1,
      serialNumber: 101,
      name: "Dr. Smith",
      phone: "123-456-7890",
      email: "dr.smith@example.com",
      address: "123 Main St",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    {
      id: 1,
      serialNumber: 101,
      name: "Dr. Smith",
      phone: "123-456-7890",
      email: "dr.smith@example.com",
      address: "123 Main St",
      commission: 15,
      total: 1500,
      paid: 1000,
      due: 500,
    },
    // ... other doctors data
  ];

  const { lightMode } = useContext(ColorContext);
  const [isChecked, setIsChecked] = useState(
    new Array(doctors.length).fill(false)
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
      className={`overflow-x-scroll border-gray-400  border overflow-y-hidden tableclass ${
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
              Email
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
              Commission
            </th>
            {/* <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Total
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Paid
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Due
            </th> */}
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
          {doctors.map((doctor, index) => (
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
              <td className="py-4 px-6 text-sm">{doctor.serialNumber}</td>
              <td className="py-4 px-6 text-sm">{doctor.name}</td>
              <td className="py-4 px-6 text-sm">{doctor.phone}</td>
              <td className="py-4 px-6 text-sm text-center">{doctor.email}</td>
              <td className="py-4 px-6 text-sm">{doctor.address}</td>
              <td className="py-4 px-6 text-sm text-center">
                {doctor.commission}
              </td>
              {/* <td className="py-4 px-6 text-sm">{doctor.total}</td>
              <td className="py-4 px-6 text-sm">{doctor.paid}</td>
              <td className="py-4 px-6 text-sm">{doctor.due}</td> */}
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

export default DoctorTable;

import React from "react";
import "./../../Styles/Sidebar.css";
import profile from "./../../public/profile.png";
const RecentPatients = () => {
  const patients = [
    {
      id: 1,
      name: "Aakarsh",
      phone: "123-456-7890",
      email: "akpat@example.com",
      contract: "Contract Details 1",
      total: 1200,
      paid: 800,
      due: 400,
    },
    {
      id: 2,
      name: "Abhikrant",
      phone: "987-654-3210",
      email: "abhim@example.com",
      contract: "Contract Details 2",
      total: 1500,
      paid: 1200,
      due: 0,
    },
    {
      id: 3,
      name: "Satyam",
      phone: "555-123-4567",
      email: "sat@example.com",
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
      due: 0,
    },
  ];
  return (
    <div className="w-full max-h-48 md:max-h-full border-0 border-gray-500  md:h-full p-5  bg-black rounded-xl overflow-y-scroll overflow-x-hidden vscrollbar">
      {patients.map((patient, index) => (
        <div key={index} className="flex h-auto px-3 py-1 items-center">
          <div className="h-full flex items-center justify-center">
            <img src={profile} alt="" className="h-14 rounded-full" />
          </div>
          <div className="h-full flex-1 flex flex-col items-start justify-center p-2">
            <span className="text-lg font-semibold">{patient.name}</span>
            <span
              className={`text-balance font-thin ${
                patient.due > 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              Payment {patient.due > 0 ? "due" : "done"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPatients;

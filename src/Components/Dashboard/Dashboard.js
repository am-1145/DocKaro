import React, { useState } from "react";
import RecentPatients from "./RecentPatients";
import doctor from "./../../public/pngimg.com - doctor_PNG16034.png";
import { useNavigate } from "react-router-dom";
import TodayActivity from "./TodayActivity";
import Calendar from "./Calendar";
import "./../../Styles/Sidebar.css";
import Online from "./Online";
// import OnlinePatients from "./OnlinePatients";
const Dashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(true);
  const [patient, setPatient] = useState(true);
  return (
    <div className="min-h-screen h-auto  md:max-h-screen md:h-screen w-full bg-black p-16 py-10 md:grid md:grid-cols-10 md:grid-flow-row md:grid-rows-11  md:gap-4">
      <div className="h-full flex items-center justify-center rounded-3xl bg-[#1850E1] w-full md:col-span-7 md:row-span-6 md:row-start-1 md:col-start-1 md:flex-none">
        <div className="flex flex-col  items-start text-white justify-center w-[60%] p-6 space-y-2">
          <span className="text-2xl font-bold flex items-start justify-center">
            India's leading pathology testing app
          </span>
          <span className="font-medium text-white  py-2 text-base flex items-start justify-center">
           Discover India’s leading pathology testing app, offering accurate diagnostics, quick results, and convenient home sample collection. Trusted by millions for reliable health insights and superior medical care. Your health, our priority.
          </span>
          <button className="bg-slate-800 font-semibold p-3 rounded-lg hover:bg-slate-500">
            Explore More
          </button>
        </div>
        <div className="flex items-end w-auto h-auto">
          <img src={doctor} alt="" className="h-80" />
        </div>
      </div>

      <div className="h-full w-full md:col-span-3 md:row-span-5 flex flex-col space-y-2 text-white font-semibold md:px-5 md:py-0 py-5 md:row-start-1 md:col-start-8">
        <div className="text-xl flex w-full items-center px-3 justify-between">
          <span>Recent Patients</span>
          <button
            className="font-thin text-gray-400 hover:font-semibold hover:text-white text-base"
            onClick={() => {
              navigate("/patients");
            }}
          >
            See all
          </button>
        </div>
        <div className="w-full flex-1 overflow-clip">
          <RecentPatients />
        </div>
      </div>

      <div className="rounded-xl bg-black border-0 border-gray-500 p-3 md:row-span-5 md:col-span-7 overflow-scroll vscrollbar overflow-x-hidden space-y-3 md:row-start-7 md:col-start-1 ">
        <TodayActivity />
        {/* <OnlinePatients text={"Online Patients"} />
        <OnlinePatients text={"Online Doctors"} /> */}
        <div
          className={`${
            admin || patient ? "h-full" : "h-20"
          } transition-all ease-in-out duration-300 h-full w-full flex items-start justify-center space-x-2`}
        >
          <Online role={"Patients"} open={patient} setOpen={setPatient} />
          <Online role={"Admins"} open={admin} setOpen={setAdmin} />
        </div>
      </div>
      <div className="md:row-span-6 md:col-span-3 max-h-full  ">
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;

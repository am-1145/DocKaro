import React, { useEffect, useState } from "react";
import "./../../Styles/Sidebar.css";
import { CiClock2 } from "react-icons/ci";

const Calendar = () => {
  const [month, setMonth] = useState("January");
  const [days, setDays] = useState(31);
  const [currDate, setCurrDate] = useState(1);
  const [openMonth, setOpenMonth] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const tasks = [
    {
      startTime: "10 am",
      date: 1,
      month: "January",
      endTime: "11 am",
      taskName: "Introduction to Java",
    },
    {
      startTime: "10 am",
      date: 1,
      month: "January",
      endTime: "11 am",
      taskName: "Introduction to Python",
    },
    {
      startTime: "10 am",
      date: 1,
      month: "January",
      endTime: "11 am",
      taskName: "do these tests",
    },
    {
      startTime: "10 am",
      date: 1,
      month: "January",
      endTime: "11 am",
      taskName: "Introduction to C++",
    },
    {
      startTime: "10 am",
      date: 4,
      month: "January",
      endTime: "11 am",
      taskName: "Test 1",
    },
    {
      startTime: "10 am",
      date: 3,
      month: "January",
      endTime: "11 am",
      taskName: "Do Etc.",
    },
    {
      startTime: "10 am",
      date: 2,
      month: "January",
      endTime: "11 am",
      taskName: "Don't do this...",
    },
  ];
  const dates = [];
  for (let i = 1; i < 32; i++) {
    dates.push(i);
  }

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(
      currentYear,
      1 + months.indexOf(month),
      0
    ).getDate();
    setDays(daysInMonth);
    console.log(days);
    // eslint-disable-next-line
  }, [month]);

  const filteredTasks = tasks.filter(
    (task) => task.date === currDate && task.month === month
  );

  return (
    <div className="text-white max-h-full flex flex-col w-full justify-center items-start p-5 space-y-2">
      <div className="text-xl w-full font-semibold">Home Visits</div>
      <div className="bg-[#091726] border border-gray-500 rounded-xl w-full py-2 px-1">
        <div className="w-full font-semibold text-lg flex items-center justify-between px-3 py-0">
          <div>Upcoming events</div>
          <button
            className="p-1 relative"
            onClick={() => {
              setOpenMonth(!openMonth);
            }}
          >
            <span>{month}</span>
            {openMonth && (
              <div className="absolute bottom-[-10rem] bg-slate-900 left-[-30px] h-40  overflow-y-scroll overflow-x-hidden vscrollbar w-auto ">
                <div className="  left-0 right-0  flex flex-col items-center justify-center">
                  {months.map((month, index) => (
                    <div
                      className="p-1 flex text-base font-thin items-center justify-start"
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setMonth(month);
                        setOpenMonth(false);
                      }}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </button>
        </div>
        <div className="flex items-center w-full justify-center px-3 py-0  ">
          <div className="w-[1999px] text-nowrap p-4 overflow-x-scroll overflow-y-hidden navscrollbar space-x-4">
            {dates.slice(0, days).map((date, index) => (
              <button
                key={index}
                className={`${
                  date === currDate ? "bg-blue-500" : "hover:bg-gray-400 "
                } rounded-full p-2 h-full w-[2.3rem]`}
                onClick={() => {
                  setCurrDate(date);
                }}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-6 space-y-2">
          <div className="max-h-[10rem] overflow-y-scroll w-full navscrollbar space-y-2">
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                className="w-full rounded-lg p-3 bg-[#1850E1] hover:bg-[#2DB7D3] hover:shadow-sm  flex items-center justify-center font-bold"
              >
                <span className="flex items-center justify-center h-full px-2 py-0">
                  <CiClock2 style={{ fontSize: "2rem" }} />
                </span>
                <div className="flex flex-col items-start justify-center w-full">
                  <span>{task.taskName}</span>
                  <span>
                    {task.startTime} to {task.endTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

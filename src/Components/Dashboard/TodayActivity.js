import React, { useState } from "react";

const TodayActivity = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activities = [
    { name: "Registrations", count: 400 },
    { name: "Bills", count: 20 },
    { name: "Invoices", count: 97 },
    { name: "Registrations", count: 356 },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="flex items-center justify-start font-bold text-xl w-full text-white p-3">
        Today's Activity
      </div>
      <div className="w-full overflow-scroll py-0 px-10 overflow-y-hidden vscrollbar">
        <div className="flex-1 w-auto h-full min-w-[45rem] min-h-[11rem] flex items-center justify-between">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="h-40 w-40 p-6 flex flex-col relative items-center justify-center rounded-lg bg-[#52eae7] text-white text-6xl font-bold"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ opacity: hoveredIndex === index ? 1 : 0.8 }}
            >
              <span className="pb-1">{activity.count}</span>
              <div
                className={`absolute bg-black rounded-lg w-[90%]   bottom-[0.2rem] left-auto right-auto text-lg transition-all ease-in-out duration-300 flex items-center justify-center ${
                  hoveredIndex === index
                    ? "opacity-35 h-14 p-6"
                    : "opacity-0 h-0 p-0"
                }`}
              >
                {activity.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayActivity;

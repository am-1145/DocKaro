import React from "react";

const ToggleSwitch = ({ checked, setChecked }) => {
  return (
    <div className="flex items-center">
      <label
        className={`relative flex items-center justify-between w-28 h-8 rounded-full cursor-pointer transition-colors ${
          checked ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span
          className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform ${
            checked ? "transform translate-x-20" : ""
          }`}
        ></span>
        <span
          className={`absolute font-semibold ${checked ? "left-2" : "right-2"}`}
        >
          {checked ? "Completed" : "Pending"}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

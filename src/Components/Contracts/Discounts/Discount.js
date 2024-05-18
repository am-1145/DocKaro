import React, { useContext, useEffect, useState } from "react";
import Tests from "../Tests/Tests";
import ColorContext from "../../../Context/colormode/colorContext";
// import Cultures from "../Cultures/Cultures";
import Packages from "../Packages/Packages";

const Discount = () => {
  const { lightMode } = useContext(ColorContext);
  // const [checked , setChecked] = useState(false)
  const [radioValue, setRadiovalue] = useState("");
  const changeSelection = (e) => {
    setRadiovalue(e.target.value);
  };
  useEffect(() => {
    console.log(radioValue);
  });
  return (
    <div
      className={`rounded border w-full ${
        lightMode ? "bg-white border-gray-200" : "bg-[#283046] border-gray-500"
      } `}
    >
      <div
        className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
          lightMode
            ? "text-black border-gray-200"
            : "text-white border-gray-500"
        } border-b `}
      >
        <span>Discount</span>
      </div>

      {/* content */}
      <div className="px-[10px] py-[6px] space-y-4 text-white">
        <div className="flex flex-col items-start justify-center space-y-3">
          <span
            className={`${
              lightMode ? "text-black" : "text-white"
            } text-base font-semibold`}
          >
            Discount Type
          </span>
          <div className="w-full flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-center ">
              <div className="flex items-center justify-center space-x-1">
                <input
                  type="radio"
                  name="Discount"
                  id="percentage"
                  value="percentage"
                  // className="peer"
                  onChange={changeSelection}
                  checked={radioValue === "percentage"}
                />
                <label
                  htmlFor="percentage"
                  className={`${lightMode ? "text-black" : "text-white"}`}
                >
                  Percentage
                </label>
              </div>
              {radioValue === "percentage" && (
                <input
                  type="number"
                  className={` p-2 bg-transparent border  ml-3 m-2 rounded-md ${
                    lightMode
                      ? " text-black border-gray-200"
                      : "text-white border-gray-500"
                  }`}
                />
              )}
            </div>
            <div className="flex items-center justify-center space-x-1">
              <input
                type="radio"
                name="Discount"
                id="custom"
                value="custom"
                onChange={changeSelection}
                checked={radioValue === "custom"}
              />
              <label
                htmlFor="custom"
                className={`${lightMode ? "text-black" : "text-white"}`}
              >
                Custom
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[12px] space-y-8">
        <Tests />

        <Packages />
      </div>
    </div>
  );
};

export default Discount;

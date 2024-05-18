import React, { useContext } from "react";
import ColorContext from "../../Context/colormode/colorContext";

const Attachment = () => {
  const { lightMode } = useContext(ColorContext);

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
        <span>Add Attachment</span>
      </div>

      {/* content */}
      <div
        className={`px-[20px] py-[10px]  ${
          lightMode ? "text-black" : "text-white"
        } grid grid-rows-1 grid-cols-1 gap-y-0 gap-x-3`}
      >
        <div
          className={`flex flex-col space-y-2 items-start justify-center ${
            lightMode ? "text-black" : "text-white"
          } `}
        >
          <div className="font-semibold ">Attachment Image (Optional) </div>
          <input
            type="text"
            className={`p-2 w-full rounded-md border  h-12  ${
              lightMode
                ? "bg-[#F8F9F9] text-gray-700 border-gray-200"
                : "text-gray-200 bg-gray-700 border-gray-500"
            }`}
            placeholder="Attachment"
          />
        </div>
      </div>
    </div>
  );
};

export default Attachment;

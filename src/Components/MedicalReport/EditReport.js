import React, { useContext } from "react";
import { LiaFileContractSolid } from "react-icons/lia";
import ColorContext from "../../Context/colormode/colorContext";

const EditReport = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`w-full h-screen border-gray-400  border ${
        lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
      }`}
    >
      <div
        className={`flex w-full h-[80px] py-[10px] ${
          lightMode ? "text-black" : "text-white"
        } px-[8px] space-x-1 items-center justify-start ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        }`}
      >
        <LiaFileContractSolid style={{ fontSize: "27px" }} />
        <span className="text-2xl">Medical Report</span>
      </div>
      <div
        className={`w-full ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        } py-[16px] px-[16px]`}
      >
        <div
          className={`rounded border w-full ${
            lightMode ? "bg-white" : "bg-[#283046]"
          } border-gray-500`}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
              lightMode ? "text-black" : "text-white"
            } border-b border-gray-500`}
          >
            <span>Tests</span>
          </div>

          {/* content */}
          <div className="px-[20px] py-[12px] space-y-10 ">
            <div className="w-full text-white bg-purple-500 flex items-center justify-start py-2 px-3 space-x-5 font-normal rounded-t-md">
              <button>Test 1</button>
              <button>Test 2</button>
              <button>Test 3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReport;

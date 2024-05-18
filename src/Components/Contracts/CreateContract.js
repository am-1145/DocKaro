import React, { useContext } from "react";
import { LiaFileContractSolid } from "react-icons/lia";
import TextEditor from "./TextEditor/TextEditor";
import Discount from "./Discounts/Discount";
import ColorContext from "../../Context/colormode/colorContext";

const CreateContract = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`w-full h-screen   border ${
        lightMode
          ? "bg-[#F8F9F9] border-gray-200"
          : "bg-[#161d31] border-gray-400"
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
        <span className="text-2xl">Contracts</span>
      </div>
      <div
        className={`w-full ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        } py-[16px] px-[16px]`}
      >
        <div
          className={`rounded border w-full ${
            lightMode
              ? "bg-white border-gray-200"
              : "bg-[#283046] border-gray-500"
          } `}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
              lightMode
                ? "text-black border-gray-200"
                : "text-white border-gray-500"
            } border-b `}
          >
            <span>Create</span>
          </div>

          {/* content */}
          <div className="px-[20px] py-[12px] space-y-10">
            <div
              className={`w-full ${
                lightMode ? "text-black" : "text-white"
              } font-bold space-y-2 flex-col items-start justify-center`}
            >
              <div>Title</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Contract Title"
                className={` placeholder:font-light border bg-transparent p-2 rounded-md w-full ${
                  lightMode
                    ? "text-black border-gray-200"
                    : "text-white border-gray-500"
                }`}
              />
            </div>

            {/* text  */}
            <div
              className={`${lightMode ? "text-black" : "text-white"} border-0`}
            >
              <TextEditor />
            </div>

            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContract;

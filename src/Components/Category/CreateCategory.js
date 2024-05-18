import React, { useContext } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import ColorContext from "../../Context/colormode/colorContext";

const CreateCategory = () => {
  const { lightMode } = useContext(ColorContext);

  return (
    <div
      className={`w-full h-screen ${
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
        <BiCategoryAlt style={{ fontSize: "27px" }} />
        <span className="text-2xl">Category</span>
      </div>
      <div
        className={`w-full ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        } py-[16px] px-[16px]`}
      >
        <div
          className={`rounded border w-full ${
            lightMode
              ? "bg-white border-gray-300"
              : "bg-[#283046] border-gray-500"
          } `}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold ${
              lightMode
                ? "text-black border-gray-300"
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
              <div>Name of Category</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Category Title"
                className={` placeholder:font-light border  p-2 rounded-md w-full ${
                  lightMode
                    ? "text-black bg-[#F8F9F9] border-gray-300"
                    : "text-white bg-transparent border-gray-500"
                }`}
              />
            </div>

            <button className="p-2 w-28 bg-[#0448BB] rounded text-white font-bold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;

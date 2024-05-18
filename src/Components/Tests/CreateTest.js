import React, { useContext, useState } from "react";
import { GrTest } from "react-icons/gr";
import TestComponents from "./TestComponents";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";
const CreateTest = () => {
  const [comments, setComments] = useState([]);
  const [testComponents, setTestComponents] = useState([]);

  const handleChange = (i, e) => {
    let newComments = [...comments];
    newComments[i].content = e.target.value;
    setComments(newComments);
  };

  const addComments = () => {
    setComments([...comments, { content: "" }]);
  };
  const addTitle = () => {
    setTestComponents([...testComponents, { type: "title", content: "" }]);
  };
  const addComponent = () => {
    setTestComponents([
      ...testComponents,
      { type: "component", name: "", unit: "", seperated: false, status: true },
    ]);
  };

  const removeComments = (i) => {
    let newComments = [...comments];
    newComments.splice(i, 1);
    setComments(newComments);
  };

  const tempsave = () => {
    console.log(comments);
  };
  const { lightMode } = useContext(ColorContext);
  return (
    <div
      className={`w-full  h-screen  ${
        lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
      }`}
    >
      <div
        className={`flex w-full h-[80px] py-[10px]  px-[8px] space-x-1 items-center justify-start ${
          lightMode ? "text-black" : "text-white"
        }`}
      >
        <GrTest style={{ fontSize: "27px" }} />
        <span className="text-2xl">Tests</span>
      </div>
      <div
        className={`w-full  py-[16px] px-[16px] ${
          lightMode ? "bg-[#F8F9F9]" : "bg-[#161d31]"
        }`}
      >
        <div
          className={`rounded border w-full   ${
            lightMode
              ? "bg-white border-gray-500"
              : "bg-[#283046] border-gray-500"
          }`}
        >
          <div
            className={`h-[55px] px-[20px] py-[12px] flex items-center justify-start font-semibold  border-b  ${
              lightMode
                ? "text-black border-gray-500"
                : "border-gray-500 text-white"
            }`}
          >
            <span>Create</span>
          </div>

          {/* content */}
          <div className="flex p-[20px] flex-col justify-center items-start space-y-2">
            <div
              className={`flex flex-col items-center justify-center lg:grid lg:grid-cols-4 lg:gap-5 lg:flex-none  p-5 w-full ${
                lightMode ? "text-black" : "text-white "
              }`}
            >
              <div className="flex font-bold w-full  flex-col items-start justify-center space-y-2">
                <span>Category</span>
                <input
                  type="text"
                  placeholder="Category"
                  className="bg-transparent placeholder:font-thin rounded border w-full border-gray-500 h-12 p-2"
                />
              </div>
              <div className="flex font-bold w-full  flex-col items-start justify-center space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none active:outline-none rounded border w-full border-gray-500 h-12 p-2"
                />
              </div>
              <div className="flex font-bold w-full  flex-col items-start justify-center space-y-2">
                <span>Shortcut</span>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none active:outline-none rounded border w-full border-gray-500 h-12 p-2"
                />
              </div>
              <div className="flex font-bold w-full  flex-col items-start justify-center space-y-2">
                <span>Sample Type</span>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none active:outline-none rounded border w-full border-gray-500 h-12 p-2"
                />
              </div>
              <div className="flex font-bold w-full  flex-col items-start justify-center space-y-2">
                <span>Price</span>
                <div className="w-full flex items-center justify-center">
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none active:outline-none rounded-l border w-[80%] border-gray-500 h-12 p-2"
                  />
                  <div className="bg-transparent focus:outline-none active:outline-none rounded-r border-l-0 border w-[20%] font-semibold border-gray-500 h-12 p-2">
                    INR
                  </div>
                </div>
              </div>

              {/* precautions */}
              <div className="w-full flex flex-col lg:col-span-4 lg:flex-none items-start justify-center space-y-2">
                <div className="font-bold">Precautions</div>
                <textarea
                  name=""
                  id=""
                  placeholder="Precautions.."
                  className="w-full h-32 p-3 bg-transparent rounded border border-gray-500"
                ></textarea>
              </div>
              {/* table */}
              <div className="w-full rounded-lg border border-gray-500 lg:col-span-4 ">
                <div className="px-5 py-3 flex items-center justify-between border-b border-gray-500">
                  <span className="font-bold">Test Components</span>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="bg-[#0448BB] flex text-white items-center px-2 py-1 rounded space-x-1 font-bold hover:shadow-md hover:shadow-purple-800"
                      onClick={() => {
                        addTitle();
                      }}
                    >
                      <span>+</span>
                      <span>Title</span>
                    </button>
                    <button
                      className="bg-[#0448BB] text-white flex items-center px-2 py-1 rounded space-x-1 font-bold hover:shadow-md hover:shadow-purple-800"
                      onClick={addComponent}
                    >
                      <span>+</span>
                      <span>Component</span>
                    </button>
                  </div>
                </div>

                <div className="w-full h-auto p-5">
                  <TestComponents
                    testComponents={testComponents}
                    setTestComponents={setTestComponents}
                  />
                </div>
              </div>

              {/* newtable */}

              <div className="w-full rounded-lg border border-gray-500 lg:col-span-4 ">
                <div className="px-5 py-3 flex items-center justify-start border-b border-gray-500">
                  <span className="font-bold">Result Comments</span>
                </div>

                <div className="w-full h-auto p-5 flex flex-col">
                  {/* comments part here */}
                  <div
                    className={`w-full h-16 flex items-center  opacity-90 justify-between px-5 py-3 ${
                      lightMode ? "bg-gray-300" : "bg-slate-800"
                    }`}
                  >
                    <span className="font-bold">Comment</span>
                    <button
                      className="bg-[#0448BB] flex items-center px-2 py-1 rounded space-x-1 font-bold hover:shadow-md text-white hover:shadow-purple-800"
                      onClick={() => {
                        addComments();
                      }}
                    >
                      <span>+</span>
                      <span>Create</span>
                    </button>
                  </div>
                  {/* newcomments here */}
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className={`h-16 w-full flex  items-center  opacity-90 justify-between px-5 py-3 space-x-3 ${
                        lightMode ? "bg-gray-400" : "bg-slate-700"
                      }`}
                    >
                      <input
                        type="text"
                        value={comment.content || ""}
                        className={`${
                          lightMode ? "bg-gray-500" : " bg-slate-900"
                        } flex-1 p-2 rounded `}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
                      />
                      <button
                        className="ml-2 bg-red-500 text-white flex items-center justify-center h-12 w-12 rounded-full "
                        onClick={() => {
                          removeComments(index);
                        }}
                      >
                        <MdDelete style={{ fontSize: "1.3rem" }} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* save */}
              <div className="w-full pt-10 p-0 flex items-end justify-start">
                <button
                  className="bg-[#0448BB] flex items-center p-3 rounded space-x-1 font-bold hover:shadow-md text-white hover:shadow-purple-800"
                  onClick={() => {
                    tempsave();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;

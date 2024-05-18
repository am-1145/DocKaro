import React, { useContext } from "react";
// eslint-disable-next-line
import { MdDelete, MdLightMode } from "react-icons/md";
import ReferenceRange from "./ReferenceRange";
import ColorContext from "../../Context/colormode/colorContext";

const TestComponents = (props) => {
  const { testComponents, setTestComponents } = props;

  const removeComponents = (i) => {
    let newComponents = [...testComponents];
    newComponents.splice(i, 1);
    setTestComponents(newComponents);
  };
  const { lightMode } = useContext(ColorContext);
  return (
    <div
      className={` overflow-x-scroll overflow-y-hidden tableclass ${
        lightMode ? "bg-gray-300" : "bg-gray-800"
      }`}
    >
      <table className=" min-w-full divide-y divide-gray-700">
        <thead className={`${lightMode ? "bg-gray-300" : " bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Name
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Unit
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Result
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Reference Range
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Seperated
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Status
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium  uppercase tracking-wider ${
                lightMode ? "text-gray-700" : "text-gray-300"
              }  `}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className={`${lightMode ? "bg-gray-300" : "bg-gray-700"} `}>
          {testComponents.map((component, index) => (
            <tr
              key={index}
              className={` ${
                lightMode
                  ? index % 2 === 0
                    ? "bg-gray-200"
                    : "bg-white"
                  : index % 2 === 0
                  ? "bg-gray-600"
                  : "bg-gray-700"
              }
                  text-center`}
            >
              {component.type === "title" ? (
                <>
                  <td colSpan={6} className="py-3 px-3">
                    <input
                      type="text"
                      name=""
                      id=""
                      className={`w-full p-2 h-12  outline-none active:outline-none rounded-lg ${
                        lightMode
                          ? "bg-gray-300 text-black"
                          : "bg-slate-800 text-white"
                      }`}
                    />
                  </td>
                  <td className="py-3 px-3 text-center ">
                    <button className="ml-2 bg-red-500 text-white flex items-center justify-center h-12 w-12 rounded-full ">
                      <MdDelete
                        style={{ fontSize: "1.6rem" }}
                        onClick={() => {
                          removeComponents(index);
                        }}
                      />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-3 px-3 text-center">
                    <input
                      type="text"
                      placeholder="Name"
                      className={`${
                        lightMode
                          ? "bg-gray-300 text-gray-700"
                          : " bg-slate-800 text-white"
                      } rounded-lg p-2 w-20 outline-none active:outline-none`}
                    />
                  </td>
                  <td className="py-3 px-1">
                    <input
                      type="text"
                      placeholder="Unit"
                      className={`${
                        lightMode
                          ? "bg-gray-300 text-gray-700"
                          : " bg-slate-800 text-white"
                      } rounded-lg p-2 w-12 outline-none active:outline-none`}
                    />
                  </td>
                  <td className="py-3 px-3 text-left">
                    <div>
                      <input type="radio" value="text" id={`text-${index}`} />
                      <label htmlFor={`text-${index}`} className="ml-1">
                        Text
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="select"
                        id={`select-${index}`}
                      />
                      <label htmlFor={`select-${index}`} className="ml-1">
                        Select
                      </label>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <ReferenceRange />
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="h-5 w-5 text-purple-600 rounded-sm"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="checkbox"
                      id={`checkbox2-${index}`}
                      className="h-5 w-5 text-purple-600 rounded-sm"
                      checked="true"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <button
                      className="ml-2 bg-red-500 text-white flex items-center justify-center h-12 w-12 rounded-full "
                      onClick={() => {
                        removeComponents(index);
                      }}
                    >
                      <MdDelete style={{ fontSize: "1.3rem" }} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestComponents;

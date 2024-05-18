import React, { useContext, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../../Styles/Referencerange.css";
import "../../Styles/Sidebar.css";
import ColorContext from "../../Context/colormode/colorContext";
const ReferenceRange = () => {
  const [refRange, setRefRange] = useState([]);
  const addRefRange = () => {
    setRefRange([
      ...refRange,
      {
        gender: "",
        ageUnit: "",
        age: { lowerLimit: 0, higherLimit: 100 },
        criticalLow: 0,
        normalRange: { lowerLimit: 0, higherLimit: 100 },
        criticalHigh: 1000,
      },
    ]);
  };

  const removeRefRange = (i) => {
    let newRefRange = [...refRange];
    newRefRange.splice(i, 1);
    setRefRange(newRefRange);
  };
  const { lightMode } = useContext(ColorContext);
  return (
    <>
      <div
        className={`${
          lightMode ? "bg-gray-300" : "bg-gray-800 "
        }  overflow-x-hidden overflow-y-hidden `}
      >
        <table className="min-w-full divide-y  divide-gray-700">
          <thead className={`${lightMode ? "bg-gray-300" : " bg-gray-800"}`}>
            <tr>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider w-2/12`}
              >
                Gender
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider w-4/12`}
              >
                Age Unit
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider `}
              >
                Age
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider `}
              >
                Critical low
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider `}
              >
                Normal
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider `}
              >
                Critical High
              </th>
              <th
                className={`${
                  lightMode ? "text-gray-700" : "text-gray-300"
                } py-2 px-5 text-center text-xs font-medium  uppercase tracking-wider `}
              >
                <button
                  onClick={addRefRange}
                  className="bg-white rounded-full text-purple-700 border-0 "
                >
                  <FaPlusCircle style={{ fontSize: "2rem" }} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody
            className={`${
              lightMode ? "bg-gray-300 text-gray-700" : "bg-gray-700 text-white"
            } `}
          >
            {refRange.map((ref, index) => (
              <>
                <tr key={index} className="my-10">
                  <td>
                    <select
                      name="gender"
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : " bg-slate-800 text-white"
                      }rounded-md p-2 `}
                    >
                      <option value="both">Both</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </td>

                  <td>
                    <select
                      name="ageUnit"
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : " bg-slate-800 text-white"
                      }rounded-md p-2 `}
                    >
                      <option value="both">Days</option>
                      <option value="male">Months</option>
                      <option value="female">Years</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                    />
                    <div>:</div>
                    <input
                      type="number"
                      name=""
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                      id=""
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                      id=""
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                    />
                    <div>:</div>
                    <input
                      type="number"
                      name=""
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                      id=""
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      className={`${
                        lightMode
                          ? "bg-gray-500 text-gray-700"
                          : "bg-slate-800 text-white "
                      }  block w-20 rounded-md p-2 `}
                      id=""
                    />
                  </td>
                  <td>
                    <button
                      className="ml-2 bg-red-500 text-white flex items-center justify-center h-12 w-12 rounded-full "
                      onClick={() => {
                        removeRefRange(index);
                      }}
                    >
                      <MdDelete style={{ fontSize: "1.3rem" }} />
                    </button>
                  </td>
                </tr>
                <tr key={`${index}-textbox`} className="my-10">
                  <td colSpan="6">
                    {/* Your textbox component or input field */}
                    {/* Example: */}
                    <input
                      type="text"
                      placeholder="Enter your text here"
                      className="w-full p-2 mt-2 bg-white text-black outline-none active:outline-none rounded-lg h-20"
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReferenceRange;

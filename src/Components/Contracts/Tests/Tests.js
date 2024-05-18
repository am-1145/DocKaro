import React, { useState, useContext } from "react";
import ColorContext from "../../../Context/colormode/colorContext";

const Tests = () => {
  const [tests, setTests] = useState([
    { name: "test 1", price: 0 },
    { name: "test 2", price: 0 },
    { name: "test 3", price: 0 },
    { name: "test 4", price: 0 },
    { name: "test 5", price: 0 },
    { name: "test 6", price: 0 },
  ]);
  const { lightMode } = useContext(ColorContext);

  const handlePriceChange = (index, price) => {
    const updatedTests = [...tests];
    updatedTests[index].price = price;
    setTests(updatedTests);
  };

  return (
    <div
      className={`rounded border w-full text-white ${
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
        <span>Tests</span>
      </div>

      {/* content */}
      <div
        className={`py-[12px] px-[20px] space-y-10 ${
          lightMode ? "text-white" : "text-black"
        } `}
      >
        <div className="flex items-center justify-between ">
          <div
            className={` flex items-center justify-center space-x-2 ${
              lightMode ? "text-white" : "text-black"
            }`}
          >
            <span className={` ${lightMode ? "text-black" : "text-white"}`}>
              Show
            </span>
            <input
              type="number"
              className={`border p-2 rounded bg-transparent w-14  ${
                lightMode ? "border-gray-200" : "border-gray-500"
              } `}
            />
            <span className={` ${lightMode ? "text-black" : "text-white"}`}>
              Results
            </span>
          </div>

          <div
            className={` ${
              lightMode ? "text-black" : "text-white"
            } flex items-center justify-center space-x-2`}
          >
            <span>Search</span>
            <input
              type="text"
              className={`border p-2 rounded bg-transparent w-32  ${
                lightMode ? "border-gray-200" : "border-gray-500"
              } `}
            />
          </div>
        </div>

        {/* table  */}
        <div className="w-full">
          <div
            className={`overflow-x-scroll overflow-y-hidden tableclass ${
              lightMode ? "bg-white" : "bg-gray-800"
            }`}
          >
            <table className="min-w-full divide-y divide-gray-700 ">
              <thead className={`${lightMode ? "bg-white" : "bg-gray-800"}`}>
                <tr>
                  <th
                    className={`py-3 px-6 text-left text-xs font-medium w-[90%]  uppercase tracking-wider ${
                      lightMode ? "text-slate-700" : "text-gray-300"
                    }`}
                  >
                    Name
                  </th>

                  <th
                    className={`py-3 px-6 text-left text-xs font-medium  uppercase tracking-wider ${
                      lightMode ? "text-slate-700" : "text-gray-300"
                    }`}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody
                className={`${
                  lightMode
                    ? "bg-white text-black"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {tests.map((test, index) => (
                  <tr
                    key={index}
                    className={`${
                      lightMode
                        ? index % 2 === 0
                          ? "bg-gray-300"
                          : "bg-white"
                        : index % 2 === 0
                        ? "bg-gray-600"
                        : "bg-gray-700"
                    }`}
                  >
                    <td className="py-4 px-6 text-sm ">{test.name}</td>

                    <td className="py-4 px-6 text-sm text-white">
                      <input
                        type="number"
                        value={test.price}
                        onChange={(e) =>
                          handlePriceChange(index, e.target.value)
                        }
                        className={`p-2 bg-transparent rounded w-14 border ${
                          lightMode
                            ? "text-black border-gray-200"
                            : "text-white border-gray-500 "
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;

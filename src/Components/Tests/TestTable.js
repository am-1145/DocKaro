import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ColorContext from "../../Context/colormode/colorContext";

const TestTable = () => {
  const tests = [
    {
      serialnumber: 1,
      CategoryName: "Blood Test",
      Shortcut: "BT",
      SampleType: "Blood",
      Price: 50,
    },
    {
      serialnumber: 1,
      CategoryName: "Blood Test",
      Shortcut: "BT",
      SampleType: "Blood",
      Price: 50,
    },
    {
      serialnumber: 1,
      CategoryName: "Blood Test",
      Shortcut: "BT",
      SampleType: "Blood",
      Price: 50,
    },
    {
      serialnumber: 1,
      CategoryName: "Blood Test",
      Shortcut: "BT",
      SampleType: "Blood",
      Price: 50,
    },
    {
      serialnumber: 1,
      CategoryName: "Blood Test",
      Shortcut: "BT",
      SampleType: "Blood",
      Price: 50,
    },
    // Other test data...
  ];

  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedPrice, setEditedPrice] = useState("");

  const { lightMode } = useContext(ColorContext);

  const handlePriceDoubleClick = (index, price) => {
    setEditingIndex(index);
    setEditedPrice(price.toString());
  };

  const handlePriceChange = (e) => {
    setEditedPrice(e.target.value);
  };

  const handlePriceBlur = () => {
    const updatedTests = [...tests];
    updatedTests[editingIndex].Price = parseFloat(editedPrice);

    setEditingIndex(-1);
    setEditedPrice("");
  };

  return (
    <div
      className={`overflow-x-scroll border-gray-400  border overflow-y-hidden tableclass ${
        lightMode ? "bg-white" : "bg-gray-800"
      }`}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className={`${lightMode ? "bg-[#F8F9F9]" : "bg-gray-800"}`}>
          <tr>
            <th
              className={`py-3 px-0 w-[3%] text-center  text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              {/* checkbox below this header  */}
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider w-2/12`}
            >
              Serial Number
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider w-4/12`}
            >
              Category Name
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider`}
            >
              Shortcut
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider`}
            >
              Sample Type
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider`}
            >
              Price
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium ${
                lightMode ? "text-gray-700" : "text-gray-300"
              } uppercase tracking-wider`}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody
          className={`${
            lightMode ? "bg-[#F8F9F9] text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {tests.map((test, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? `${
                      lightMode ? "bg-[#F8F9F9] " : "bg-[#161d31]"
                    } h-10 text-center`
                  : `${
                      lightMode ? "bg-white" : "bg-[#283046]"
                    } h-10 text-center`
              }
            >
              <td className="py-4 pl-3 pr-0 text-sm">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="py-4 px-6 text-sm">{test.serialnumber}</td>
              <td className="py-4 px-6 text-sm">{test.CategoryName}</td>
              <td className="py-4 px-6 text-sm">{test.Shortcut}</td>
              <td className="py-4 px-6 text-sm">{test.SampleType}</td>
              <td
                className="py-4 px-6 text-sm"
                onDoubleClick={() => handlePriceDoubleClick(index, test.Price)}
              >
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={editedPrice}
                    onChange={handlePriceChange}
                    onBlur={handlePriceBlur}
                    className="bg-gray-500 p-1 rounded w-14"
                    autoFocus
                  />
                ) : (
                  test.Price
                )}
              </td>
              <td className="py-4 px-6 text-sm">
                <button className={`bg-blue-500 p-2 rounded text-white`}>
                  <FaEdit style={{ fontSize: "1rem" }} />
                </button>

                <button className="bg-red-500 p-2 ml-2 rounded text-white">
                  <MdDelete style={{ fontSize: "1rem" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;

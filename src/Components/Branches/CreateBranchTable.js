import React, { useContext, useEffect, useState } from "react";
import ColorContext from "../../Context/colormode/colorContext";

// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

const CreateBranchTable = () => {
  const payments = [];
  const { lightMode } = useContext(ColorContext);
  const [isChecked, setIsChecked] = useState(
    new Array(payments.length).fill(false)
  );
  // eslint-disable-next-line
  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <div
      className={`overflow-x-scroll w-full border-gray-400  border overflow-y-hidden tableclass ${
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
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Product
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Initial Quantity
            </th>
            <th
              className={`py-3 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                lightMode ? "text-slate-700" : "text-gray-300"
              }`}
            >
              Stock Alert
            </th>
          </tr>
        </thead>
        <tbody
          className={`${
            lightMode ? "bg-[#F8F9F9] text-black" : "bg-gray-700 text-gray-300"
          }`}
        ></tbody>
      </table>
    </div>
  );
};

export default CreateBranchTable;

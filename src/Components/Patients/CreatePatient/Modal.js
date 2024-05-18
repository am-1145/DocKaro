import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import ModalContext from "../../../Context/patientmodal/modalContext";
import ColorContext from "../../../Context/colormode/colorContext";

const Modal = () => {
  const { setOpenModal } = useContext(ModalContext);
  const { lightMode } = useContext(ColorContext);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-20"></div>

      {/* Modal content */}
      <div
        className={`p-5 bg-[#161d31] z-50 rounded-lg border border-gray-500 ${
          lightMode ? "bg-gray-300 " : "bg-[#161d31]"
        }`}
      >
        <div
          className={`${
            lightMode
              ? "bg-gray-200 border-gray-300"
              : " bg-[#283046] border-gray-500"
          } z-50  rounded-lg  border`}
        >
          <div
            className={`font-semibold  px-5 flex items-center justify-between py-3 border-b ${
              lightMode
                ? "text-black border-gray-300"
                : "text-white border-gray-500 "
            }`}
          >
            <span>Reciepts</span>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="p-2 rounded-full flex items-center justify-center"
            >
              <ImCross style={{ fontSize: "0.7rem" }} />
            </button>
          </div>
          <div className="flex px-5 py-3 items-center justify-center space-x-14">
            <div className="flex flex-col items-start justify-center space-y-8">
              <div
                className={`flex w-[350px] items-center justify-center ${
                  lightMode ? "text-black" : "text-white "
                } `}
              >
                <div className=" w-32 font-semibold mr-3  ">Subtotal:</div>
                <input
                  type="number"
                  name="username"
                  className={`w-full border border-r-0  rounded-l-md py-2 px-3 focus:outline-none  ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "border-gray-500  bg-gray-700"
                  }`}
                />
                <div
                  className={`font-semibold  border border-l-0 rounded-r-md px-3 py-2   ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  INR
                </div>
              </div>

              <div
                className={`flex  w-[350px]  items-center justify-center ${
                  lightMode ? "text-black" : "text-white "
                } `}
              >
                <div className=" w-[95px] font-semibold mr-3  ">Discount:</div>
                <input
                  type="number"
                  name="username"
                  className={`w-full border border-r-0  rounded-l-md py-2 px-3 focus:outline-none  ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "border-gray-500  bg-gray-700"
                  }`}
                />
                <div
                  className={`font-semibold  border border-l-0 rounded-r-md px-3 py-2   ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  INR
                </div>
              </div>

              <div
                className={`flex  w-[350px]  items-center justify-center ${
                  lightMode ? "text-black" : "text-white "
                } `}
              >
                <div className=" w-[95px] font-semibold mr-3  ">Total:</div>
                <input
                  type="number"
                  name="username"
                  className={`w-full border border-r-0  rounded-l-md py-2 px-3 focus:outline-none  ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "border-gray-500  bg-gray-700"
                  }`}
                />
                <div
                  className={`font-semibold  border border-l-0 rounded-r-md px-3 py-2   ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  INR
                </div>
              </div>

              <div
                className={`flex   w-[350px]  items-center justify-center ${
                  lightMode ? "text-black" : "text-white "
                } `}
              >
                <div className=" w-[95px] font-semibold mr-3  ">Paid:</div>
                <input
                  type="number"
                  name="username"
                  className={`w-full border border-r-0  rounded-l-md py-2 px-3 focus:outline-none  ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "border-gray-500  bg-gray-700"
                  }`}
                />
                <div
                  className={`font-semibold  border border-l-0 rounded-r-md px-3 py-2   ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  INR
                </div>
              </div>

              <div
                className={`flex   w-[350px]  items-center justify-center ${
                  lightMode ? "text-black" : "text-white "
                } `}
              >
                <div className=" w-[95px] font-semibold mr-3  ">Due:</div>
                <input
                  type="number"
                  name="username"
                  className={`w-full border border-r-0  rounded-l-md py-2 px-3 focus:outline-none  ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "border-gray-500  bg-gray-700"
                  }`}
                />
                <div
                  className={`font-semibold  border border-l-0 rounded-r-md px-3 py-2   ${
                    lightMode
                      ? "border-gray-300 bg-gray-200"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  INR
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-10">
              <div
                className={`  flex flex-col space-y-2 ${
                  lightMode ? "text-black" : "text-white"
                }`}
              >
                <span className="font-semibold">Paid amount</span>
                <input
                  type="number"
                  name=""
                  id=""
                  className={`w-full px-3 py-2 rounded-md border ${
                    lightMode
                      ? "bg-gray-200 border-gray-300"
                      : "bg-gray-700 border-gray-500  "
                  }`}
                />
              </div>
              <div
                className={`${
                  lightMode ? "text-black" : "text-white "
                }  flex flex-col space-y-2`}
              >
                <span className="font-semibold">Payment Method</span>
                <div className="flex items-center justify-center space-x-5">
                  <button
                    className={`px-3 py-2 rounded-md  font-semibold ${
                      lightMode
                        ? "bg-gray-700 hover:bg-slate-800 text-white"
                        : "bg-gray-200 hover:bg-white text-black"
                    }`}
                  >
                    Cash
                  </button>
                  <button
                    className={`px-3 py-2 rounded-md  font-semibold ${
                      lightMode
                        ? "bg-gray-700 hover:bg-slate-800 text-white"
                        : "bg-gray-200 hover:bg-white text-black"
                    }`}
                  >
                    Card
                  </button>
                  <button
                    className={`px-3 py-2 rounded-md  font-semibold ${
                      lightMode
                        ? "bg-gray-700 hover:bg-slate-800 text-white"
                        : "bg-gray-200 hover:bg-white text-black"
                    }`}
                  >
                    UPI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

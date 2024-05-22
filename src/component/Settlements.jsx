import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Settlements = () => {
  const [showTransDetails, setShowTransDetails] = useState(null);

  const toggleTransaction = (transId) => {
    setShowTransDetails(showTransDetails === transId ? null : transId);
  };

  const data1 = [
    {
      id: 1,
      Day: "Saturday",
      Date: "May 21,2024",
      Amount: "5000",
      Mode: "upi",
      Status: "complete",
    },
    {
      id: 2,
      Day: "Sunday",
      Date: "May 22,2024",
      Amount: "6000",
      Mode: "wallet",
      Status: "InProgress",
    },
    {
      id: 3,
      Day: "Monday",
      Date: "May 23,2024",
      Amount: "7000",
      Mode: "netbanking",
      Status: "Cancelled",
    },
  ];

  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-col w-full h-fit ">
        <div className="bg-white  w-full h-fit p-4 gap-4 mb-9 rounded-lg ">
          <div className="text-[#6B7280] sm:block hidden md:flex w-full justify-between mb-4  border-b-2 font-semibold text-[.9rem] gap-2">
            <div className="w-[24%] flex mb-3 items-center justify-evenly">
              <div className=" text-center text-[1.05rem] sm:block hidden items-center">
                Tnx Day
              </div>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[72%] gap-2 justify-evenly ">
              <div className="sm:block hidden sm:ml-8 ml-2">DATE & TIME</div>
              <div className="sm:block hidden sm:ml-8 ml-2">AMOUNT</div>
              <div className="sm:block hidden sm:ml-8 ml-2">MODE</div>
              <div className="sm:block hidden ">STATUS</div>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col justify-center items-center md:mt-8 mt-0">
            {data1?.map((data, index) => (
              <div className="w-[95%]">
                <div
                  key={index}
                  className="w-full h-[4rem] flex flex-row md:gap-14 gap-8 border-2 rounded-2xl md:p-6 p-2 mt-4 relative"
                >
                  <div className="md:w-[38%] w-[25%] flex md:flex-row flex-col  justify-between items-center">
                    <p className="font-semibold text-black text-base md:ml-8 ml-2">
                      {data.Day}
                    </p>
                    <p className="text-slate-400 font-semibold md:text-base text-xs  md:ml-0 ml-2 text-nowrap">
                      {data.Date}
                    </p>
                  </div>
                  <div className="md:w-[55%] w-[50%] flex items-center justify-evenly gap-6">
                    <p className="font-semibold text-black text-base">
                      {data.Amount}
                    </p>
                    {/* <p className="ml-16 sm:block hidden ">{data.Mode}</p> */}
                    {/* <p className="md:ml-14">{data.Status}</p> */}
                    <p
                      className={`rounded-2xl w-[20%]  h-[2rem] py-[.5rem] text-semibold text-center ml-16 mt-2 hidden sm:flex items-center justify-center 
                
                  ${
                    data.Mode === "upi"
                      ? "bg-[#DEF7EC] text-green-700"
                      : data.Mode === "wallet"
                      ? "bg-[#fbd9de] text-[#FD4A65]"
                      : data.Mode === "netbanking"
                      ? "bg-[#E1EFFE] text-[#7157f1]"
                      : ""
                  }`}
                    >
                      {data.Mode}
                    </p>
                    <p
                      className={`rounded-2xl md:w-[20%] w-full h-[2rem] py-[.5rem] text-semibold text-center mt-2 flex items-center justify-center text-nowrap
                
                  ${
                    data.Status === "complete"
                      ? "bg-[#DEF7EC] text-green-700"
                      : data.Status === "Cancelled"
                      ? "bg-[#fbd9de] text-[#FD4A65]"
                      : data.Status === "InProgress"
                      ? "bg-[#E1EFFE] text-[#7157f1]"
                      : ""
                  }`}
                    >
                      {data.Status}
                    </p>
                  </div>
                  <span className="absolute right-3 top-[20px] cursor-pointer">
                    {showTransDetails === data.id ? (
                      <FaAngleUp
                        fontSize={24}
                        onClick={() => toggleTransaction(data.id)}
                      />
                    ) : (
                      <FaAngleDown
                        fontSize={24}
                        onClick={() => toggleTransaction(data.id)}
                      />
                    )}
                  </span>
                </div>

                {showTransDetails === data.id && (
              <div className=" h-fit flex md:flex-row flex-col gap-4  md:mt-8 mt-4 w-full border-2 rounded-2xl md:p-4 p-2 ">
                <div className="md:w-[38%] w-full flex justify-between">
                  <div>Transaction progress</div>
                  <div className="w-[47%] flex flex-col gap-1 justify-center">
                    <p className="w-full font-semibold text-sm">
                      Settlement from Snackbae
                    </p>
                    <p className="text-slate-400 text-sm text-center">
                      Saturday, Apr 15, 2021
                    </p>
                    <p className="font-semibold text-xl mt-4 text-center">
                    {data.Amount}
                    </p>
                  </div>
                </div>
                <div className="md:w-[58%] w-full flex md:flex-row flex-col ">
                  <div className="md:w-[40%] w-full flex flex-col gap-4 md:border-0 border-2 rounded-lg md:mt-0 mt-4">
                    <p className="w-full font-semibold text-center text-black border-b-2 pb-2">
                      Payout Account
                    </p>
                    <div className="flex gap-6 justify-between px-2">
                      <p className=" text-slate-400">UPI ID</p>
                      <p className="font-semibold ">ABCDEFG@YBL</p>
                    </div>
                    <div className="flex justify-between px-2">
                      <p className=" text-slate-400">UPI Number </p>
                      <p className="font-semibold mb-2">+9191234567</p>
                    </div>
                  </div>
                  <div className="md:w-[40%] w-full flex flex-col gap-4 md:border-0 border-2 md:ml-4 rounded-lg md:mt-0 mt-4">
                    <p className="font-semibold text-center text-black border-b-2 pb-2">
                      Settlement Breakup
                    </p>
                    <div className="flex gap-6 px-2">
                      <p className="text-slate-400">Total Collection </p>
                      <p className="font-semibold ">{data.Amount}</p>
                    </div>
                    <div className="flex gap-6 px-2">
                      <p className="text-slate-400">Gateway Fee(2%)</p>
                      <p className="font-semibold text-blue-500 mb-2">100</p>
                    </div>
                  </div>
                  <div className="md:w-[20%] w-full flex flex-col gap-4 md:border-0 border-2 rounded-lg md:mt-0 mt-4">
                    <p className="w-full font-semibold text-center text-nowrap text-slate-400 border-b-2 pb-2">
                      Amount you get
                    </p>
                    <p className="text-center font-semibold text-xl md:mt-6 mb-2">
                      4900
                    </p>
                  </div>
                </div>
              </div>
            )}
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settlements;
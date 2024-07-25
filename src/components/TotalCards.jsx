import React from 'react'
import { HiArrowUp } from "react-icons/hi2";
import { HiArrowDown } from "react-icons/hi2";
export default function TotalCards() {
  return (
    <div>
      <div className="w-full h-[200px]  bg-white rounded-xl flex items-center justify-between p-12 ">
          <div className=" flex flex-col gap-2">
          <div className="flex gap-10 ">
            <h1 className="text-gray-900 text-2xl">Total Income</h1>
            <div className="text-green-500 text-3xl h-[40px] w-[40px] bg-gray-200 pl-1 pt-1 rounded-md   ">
            <HiArrowUp />
            </div> 
            </div>
            <div>
           <p className="text-3xl font-bold text-blue-gray-800">$50,530.00  <span className="text-gray-500 text-[15px]">(USD) </span> 
           </p> 
            <span className="text-md text-gray-500"> 
            20% increase compared to last week</span>
           </div>
          </div>


          <div className=" flex flex-col gap-2">
            <div className="flex gap-10 ">
            <h1 className="text-gray-900 text-2xl">Total Income</h1>
            <div className="text-red-500 text-3xl h-[40px] w-[40px] bg-gray-200 pl-1 pt-1 rounded-md   ">
            <HiArrowDown />
            </div> 
            </div>
            <div>
           <p className="text-3xl font-bold text-blue-gray-800">$19,760.00  <span className="text-gray-500 text-[15px]">(USD) </span> 
           </p> 
            <span className="text-md text-gray-500"> 
            10% increase compared to last week</span>
           </div>
          </div>
      </div>
    </div>
  )
}

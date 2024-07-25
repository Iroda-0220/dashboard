import React from 'react'
import { Button } from "@material-tailwind/react";

export default function Card() {
  return (
    <div>
        <div className="w-[340px] h-[230px] bg-white rounded-xl flex flex-col justify-center p-6 gap-3 ">
            <h1 className="text-xl font-bold text-gray-700">Your balance</h1>
           <div>
           <p className="text-3xl font-bold text-blue-gray-800">$120,435.00  <span className="text-gray-500 text-[15px]">(USD) </span> </p> 
            <span className="text-md text-gray-500"> 
            From Jan 01 2022 to Jan 31 2022</span>
           </div>

            <div className="flex  gap-6 pt-4">
            <Button className="bg-blue-400 ">$ TOP  UP</Button>
            <Button className="border-blue-600 border-solid border-[2px] bg-white text-blue-600">TRANSFER</Button>

            </div>

        </div>
      
    </div>
  )
}

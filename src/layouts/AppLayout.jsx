import React from 'react'
import { Outlet } from 'react-router-dom'
import Sitebar from '../components/Sitebar'
import Navbar  from '../components/Navbar'
export default function AppLayaut() {
    return (
        <div className="flex h-screen overflow-scroll">
            <Sitebar />
            <div className="w-full">
               <div>
               <Navbar />
               </div>
                <div >
                <Outlet />
                </div>
            </div>
          
        </div>

    )
}
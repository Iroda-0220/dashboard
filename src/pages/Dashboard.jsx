import React, { useEffect } from 'react'
import ChartBar from '../components/ChartBar'
import PieChart from '../components/PieChart'
import { Table } from '../components/Table'
import LineChartDiagram from '../components/LineChartDiagram'
import Card from '../components/Card'
import TotalCards from '../components/TotalCards'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Dashboards() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);




  return (
    <div className=" min-h-[90vh] pt-16 pl-8 pb-8 gap-10 bg-blue-gray-300">
    <div className="grid grid-cols-6 gap-8  pt-8 ">
      <div className="col-span-4 flex flex-col gap-6">

        <div data-aos="fade-up" className='mb-6'>
          <ChartBar/>
        </div>

        <div  data-aos="fade-up" data-aos-delay="400" className='mb-6'>
        <Table/>
        </div>

        {/* <div data-aos="fade-up" data-aos-delay="1"> */}
        <div>
         <TotalCards/>
        </div>

      </div>

      <div className="col-span-2 flex flex-col gap-10 pr-8">
        
          <div data-aos="fade-up" data-aos-delay="600">
            <Card/>
          </div>

         <div data-aos="fade-up" data-aos-delay="700">
          <PieChart/>
         </div>

         {/* <div data-aos="fade-up" data-aos-delay="500"> */}
         <div>
        <LineChartDiagram/>
        </div>
       
      </div>
      
    </div>


    </div>
  )
}

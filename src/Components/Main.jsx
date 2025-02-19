import React from 'react'
import { Link } from "react-router-dom";
import { Utensils, Droplet, BarChart, CalendarCheck, Heart } from "lucide-react";
import Footer from './Footer';


const Main = () => {

  return (
    <div>
    
    <div>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-[#638ecb]">Health Monitor</h1>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        
        <Link to="/nutrition" className="group">
          <div className="p-32 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:bg-blue-100 transition">
            <Utensils size={32} className="text-[#638ecb] group-hover:text-blue-800" />
            <span className="text-lg font-semibold">Nutrition Logging</span>
          </div>
        </Link>

        <Link to="/heartrate" className="group">
          <div className="p-32 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:bg-blue-100 transition">
            <Heart size={32} className="text-[#638ecb] group-hover:text-blue-800" />
            <span className="text-lg font-semibold">Heart rate Measure</span>
          </div>
        </Link>

        
        <Link to="/hydration" className="group">
          <div className="p-32 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:bg-blue-100 transition">
            <Droplet size={32} className="text-[#638ecb] group-hover:text-blue-800" />
            <span className="text-lg font-semibold">Hydration Reminders</span>
          </div>
        </Link>

        
        <Link to="/visualization" className="group">
          <div className="p-32 bg-white shadow-lg rounded-xl flex items-center space-x-4 hover:bg-blue-100 transition">
            <BarChart size={32} className="text-[#638ecb] group-hover:text-blue-800" />
            <span className="text-lg font-semibold">Data Visualization</span>
          </div>
        </Link>
        

        
        
      </div>
    </div>
  
    </div>
    <Footer/>
    </div>
  )
}

export default Main
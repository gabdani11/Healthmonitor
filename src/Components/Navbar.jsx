import React from 'react'
import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";

const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false); 
      
  return (
    
    <nav className="bg-[#638ecb] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <HeartPulse size={28} />
          <a href='/'><span className="text-xl font-semibold">Health Monitor</span></a>
        </div>

        
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="/"className="hover:text-[#638ecb] rounded-full p-2 hover:bg-slate-100">Dashboard</a>
          <a href="#" className="hover:text-[#638ecb] rounded-full p-2 hover:bg-slate-100 ">Reports</a>
          <a href="#" className="hover:text-[#638ecb] rounded-full p-2 hover:bg-slate-100 ">Settings</a>
          <a href="#" className="hover:text-[#638ecb] rounded-full p-2 hover:bg-slate-100 ">Profile</a>
        </div>

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 items-center">
          <a href="/" className="hover:text-gray-200">Dashboard</a>
          <a href="#" className="hover:text-gray-200">Reports</a>
          <a href="#" className="hover:text-gray-200">Settings</a>
          <a href="#" className="hover:text-gray-200">Profile</a>
        </div>
      )}
    </nav>
  


    
  )
}

export default Navbar
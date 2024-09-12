import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#071119] p-4 sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center text-[#00ff9d] text-xl font-semibold">
          <CheckCircle className="mr-2" />
          Ingabo Tech
        </a>
        <div className="flex items-center space-x-8">
          <a href="#home" className="relative text-[#00ff9d] group">
            Home
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
          <a href="#services" className="relative text-white hover:text-[#00ff9d] group">
            Services
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
          <a href="#aboutus" className="relative text-white hover:text-[#00ff9d] group">
            About Us
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
          <a href="#team" className="relative text-white hover:text-[#00ff9d] group">
            Team
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
          <a href="#reviews" className="relative text-white hover:text-[#00ff9d] group">
            Reviews
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
          <button className="relative bg-[#00ff9d] text-[#0c0d0e] px-8 py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

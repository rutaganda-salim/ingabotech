import React from 'react';
import { Star, Globe, Coffee, Monitor, Cross, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#071119] text-white min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Boost Your Online Presence with Custom Software & Tech Consulting
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          We specialize in creating tailored software solutions and providing strategic tech
          consulting to help your business thrive online. Enhance your digital impact with our
          expert SEO optimization services.
        </p>
        <button
            href="#get-quote"
            onClick={() => navigate("/options")}
            className="relative bg-[#00ff9d] text-[#0c0d0e] px-8 py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] mb-6 transition-colors duration-300 ease-in-out"
          >
            Quote Now
          </button>
        <div className="flex items-center justify-center mb-8">
          <span className="mr-2 text-xl">4.8</span>
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
        <div>
          <p className="text-gray-400 mb-4">Companies that trust Ingabo Tech</p>
          <div className="flex flex-wrap justify-center gap-4 text-[#00ff9d] font-semibold">
            <CompanyLogo icon={Globe} name="GOT" />
            <CompanyLogo icon={Coffee} name="QAHWA" />
            <CompanyLogo icon={Monitor} name="MBOUKE" />
            <CompanyLogo icon={Cross} name="IJABIRO" />
            <CompanyLogo icon={ShoppingCart} name="NDAGIRIMANA" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyLogo({ icon: Icon, name }) {
  return (
    <div className="flex items-center">
      <Icon className="w-5 h-5 mr-2" />
      <span>{name}</span>
    </div>
  );
}
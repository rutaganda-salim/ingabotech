import React, { useState, useEffect } from "react";
import { CheckCircle, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  // Handle scroll to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#home",
        "#services",
        "#aboutus",
        "#team",
        "#reviews",
        "#get-quote",
      ];
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 80 && bottom >= 80) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-[#071119] p-4 sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
         
          className="flex items-center text-[#00ff9d] text-xl font-semibold"
          onClick={() => navigate("/")}
        >
          <img src="/6.png" alt="Ingabo Tech Logo" className="w-37 h-24 mr-2" />
          INGABO tech
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={() => navigate("/")}
            className={`relative group ${
              activeLink === "#home"
                ? "text-[#00ff9d]"
                : "text-white hover:text-[#00ff9d]"
            }`}
          >
            Home
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform ${
                activeLink === "#home" ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
            ></span>
          </a>
          <a
            href="#services"
            onClick={() => navigate("/#services")}
            className={`relative group ${
              activeLink === "#services"
                ? "text-[#00ff9d]"
                : "text-white hover:text-[#00ff9d]"
            }`}
          >
            Services
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform ${
                activeLink === "#services" ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
            ></span>
          </a>
          <a
            href="#aboutus"
            onClick={() => navigate("/#aboutus")}
            className={`relative group ${
              activeLink === "#aboutus"
                ? "text-[#00ff9d]"
                : "text-white hover:text-[#00ff9d]"
            }`}
          >
            About Us
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform ${
                activeLink === "#aboutus" ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
            ></span>
          </a>
          <a
            href="#team"
            onClick={() => navigate("/#team")}
            className={`relative group ${
              activeLink === "#team"
                ? "text-[#00ff9d]"
                : "text-white hover:text-[#00ff9d]"
            }`}
          >
            Team
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform ${
                activeLink === "#team" ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
            ></span>
          </a>
          <a
            href="#reviews"
            onClick={() => handleLinkClick("#reviews")}
            className={`relative group ${
              activeLink === "#reviews"
                ? "text-[#00ff9d]"
                : "text-white hover:text-[#00ff9d]"
            }`}
          >
            Reviews
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#00ff9d] transform ${
                activeLink === "#reviews" ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
            ></span>
          </a>
          <a
            href="#get-quote"
            onClick={() => navigate("/options")}
            className="relative bg-[#00ff9d] text-[#0c0d0e] px-8 py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#00ff9d] focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <a
            href="#home"
            onClick={() => handleLinkClick("#home")}
            className={`text-[#00ff9d] ${
              activeLink === "#home" ? "font-bold" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => handleLinkClick("#services")}
            className={`text-white hover:text-[#00ff9d] ${
              activeLink === "#services" ? "font-bold" : ""
            }`}
          >
            Services
          </a>
          <a
            href="#aboutus"
            onClick={() => handleLinkClick("#aboutus")}
            className={`text-white hover:text-[#00ff9d] ${
              activeLink === "#aboutus" ? "font-bold" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="#team"
            onClick={() => handleLinkClick("#team")}
            className={`text-white hover:text-[#00ff9d] ${
              activeLink === "#team" ? "font-bold" : ""
            }`}
          >
            Team
          </a>
          <a
            href="#reviews"
            onClick={() => handleLinkClick("#reviews")}
            className={`text-white hover:text-[#00ff9d] ${
              activeLink === "#reviews" ? "font-bold" : ""
            }`}
          >
            Reviews
          </a>
          <a
            href="#get-quote"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
            className="bg-[#00ff9d] text-[#0c0d0e] px-8 py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}

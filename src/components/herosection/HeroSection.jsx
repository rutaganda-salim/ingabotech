import {
  Star,
  Globe,
  Coffee,
  Monitor,
  Cross,
  ShoppingCart,
} from "lucide-react";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="bg-[#071119] text-white py-8 sm:py-12 md:py-16 px-4 flex flex-col min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          "Boost Your Online Presence with Custom Software & Tech Consulting"
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
          We specialize in creating tailored software solutions and providing
          strategic tech consulting to help your business thrive online. Enhance
          your digital impact with our expert SEO optimization services.
        </p>
        {/* <button
          onClick={() => navigate("/options")}
          className="bg-[#00ff9d] text-[#0c0d0e] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out w-full sm:w-auto"
        >
          Quote now
        </button> */}
        <a
          href="#get-quote"
          onClick={() => navigate("/options")}
          className=" bg-[#00ff9d] text-[#0c0d0e]  sm:px-12 py-3 sm:py-4 px-8  rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out w-full sm:w-auto"
        >
          Quote now
        </a>
        <div className="flex items-center justify-center mt-4">
          <span className="mr-2 mt-4">4.8</span>
          <Star className="w-5 h-5 fill-yellow-500 text-yellow-500 mt-4" />
        </div>
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <p className="text-center text-gray-400 mb-4 sm:mb-6">
          Companies that trust Ingabo Tech
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <CompanyLogo icon={Globe} name="G0T IT LTD" />
          <CompanyLogo icon={Coffee} name="QAHWA HOUSE" />
          <CompanyLogo icon={Monitor} name="MBOUKE SERVICES" />
          <CompanyLogo icon={Cross} name="IJABIRO FUNERAL SERVICES" />
          <CompanyLogo icon={ShoppingCart} name="NDAGIRIMANA LTD" />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo({ icon: Icon, name }) {
  return (
    <div className="text-[#00ff9d] font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center">
      <Icon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> {name}
    </div>
  );
}

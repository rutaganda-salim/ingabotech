import React from 'react';
import { User, Zap, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  // Define the services
  const cards = [
    {
      icon: <Award className="w-16 h-16 text-[#00ff9d] bg-[#004d29] rounded-full p-3 md:p-4 mr-4" />,
      title: "Experience",
      description:
        "With years of industry experience, we bring deep expertise to every project, ensuring high-quality solutions tailored to your business needs.",
    },
    {
      icon: <Zap className="w-16 h-16 text-[#00ff9d] bg-[#004d29] rounded-full p-3 md:p-4 mr-4" />,
      title: "Results oriented solutions",
      description:
        "Our focus is on delivering tangible results. We build innovative, efficient, and scalable solutions that drive success and growth.",
    },
    {
      icon: <User className="w-16 h-16 text-[#00ff9d] bg-[#004d29] rounded-full p-3 md:p-4 mr-4" />,
      title: "Customer centric approach",
      description:
        "We put our clients first. By understanding your goals, we develop strategies that align with your vision and ensure complete satisfaction.",
    },
    {
      icon: <Users className="w-16 h-16 text-[#00ff9d] bg-[#004d29] rounded-full p-3 md:p-4 mr-4" />,
      title: "Collaborative Partnership",
      description:
        "We work closely with you as partners, maintaining open communication and ensuring seamless collaboration throughout every stage of the project.",
    },
  ];

  return (
    <section className="bg-[#00ff9d] py-16 px-4 lg:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-12">
        {/* Left section */}
        <div className="md:col-span-1 mx-auto md:w-[80%] text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#071119] mb-6">
            Why choose us?
          </h2>
          <p className="text-base sm:text-lg text-[#071119] mb-8">
            We are committed to delivering exceptional services that exceed
            expectations. Our team’s dedication, innovation, and expertise are
            the reasons our clients choose us for their most important projects.
          </p>
          <button className="bg-[#071119] text-white rounded-full py-4 px-8 border-2 border-transparent hover:bg-transparent hover:border-[071119] hover:text-[#071119] transition-colors">
            Get a Quote
          </button>

        </div>

        {/* Right section - cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#071119] p-6 shadow-2xl hover:shadow-3xl transition-shadow rounded-3xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

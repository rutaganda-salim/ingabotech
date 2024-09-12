import React from 'react';
import { Lightbulb, Code, Globe, Smartphone, Palette, Shield, BarChart, Search } from 'lucide-react';

// Define the ServiceCard component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#0c1824] p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:bg-[#0f1f2e] group max-w-xs mx-auto">
    <div className="flex items-center mb-6">
      <div className="bg-[#004d29] rounded-full p-4 mr-4 group-hover:bg-[#00ff9d] transition-colors duration-300">
        <Icon className="w-8 h-8 text-[#00ff9d] group-hover:text-[#0c1824] transition-colors duration-300" />
      </div>
      <h3 className="text-[#00ff9d] text-2xl font-semibold group-hover:text-white transition-colors duration-300">{title}</h3>
    </div>
    <p className="text-gray-300 text-base group-hover:text-[#00ff9d] transition-colors duration-300">{description}</p>
  </div>
);

// Define the ServicesSection component
const ServicesSection = () => {
  // Define services
  const services = [
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your business processes and drive innovation."
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your unique business needs and challenges."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive and dynamic websites that engage your audience and drive conversions."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Intuitive and powerful mobile applications for iOS and Android platforms."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centric design that enhances user satisfaction and boosts engagement."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Robust security measures to protect your digital assets and sensitive data."
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to increase your online presence and reach."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Search engine optimization to improve your visibility and organic traffic."
    }
  ];

  return (
    <section className="bg-[#071119] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Our Services</h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        We offer a comprehensive range of IT and digital services to empower your business in the digital age.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div className="flex justify-center" key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;

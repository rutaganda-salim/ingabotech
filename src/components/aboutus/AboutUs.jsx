import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#071119] py-12 px-4 md:py-16 lg:px-8 h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 lg:mb-16 text-center w-full text-white">
          About us
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-16">
            <img
              src="/about.png"
              alt="Ingabo Tech workspace"
              className="rounded-lg shadow-lg border-r-[#00ff99]"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-medium mb-4 text-white">Ingabo Tech</h2>
            <p className="text-[#00ff99] mb-4">
              At Ingabo Tech, we believe in harnessing the power of innovation to deliver
              cutting-edge solutions that transform businesses. Our mission is to empower
              companies with the technology and tools they need to thrive in the digital
              age.
            </p>
            <p className="mb-6 text-white">
              From web and mobile development to UI/UX design and cybersecurity, our team
              of experts is dedicated to providing tailor-made solutions that address the
              unique challenges of each client. We take pride in our ability to drive
              growth and success through collaboration, creativity, and technical
              excellence.
            </p>
            <button className="relative bg-[#00ff9d] text-[#0c0d0e] px-6 py-3 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

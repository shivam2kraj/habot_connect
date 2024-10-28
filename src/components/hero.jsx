
import React from "react";
import Rectangle from '../assets/Rectangle.png';

function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-6 py-32 px-5 md:px-10 lg:px-20">

      {/* Main Headings */}
      <h1 className="text-[44px] sm:text-[36px] md:text-[44px] lg:text-[55px] font-Poppins font-semibold text-white capitalize text-center w-full max-w-3xl leading-snug">
        Are You a Supplier?
      </h1>
      <h1 className="text-[44px] sm:text-[36px] md:text-[44px] lg:text-[55px] font-Poppins font-semibold text-white capitalize text-center w-full max-w-3xl leading-snug">
        Explore Matching Opportunities.
      </h1>

      {/* Search Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="border border-gray-400 text-gray-600 font-Poppins hover:shadow-lg transition duration-500 hover:border-white px-8 py-3 w-full sm:w-auto">
          Search your required service here
        </button>
        <button className="border border-gray-400 text-gray-600 font-Poppins hover:shadow-lg transition duration-500 hover:border-white px-8 py-3 w-full sm:w-auto">
          Search your desired location here
        </button>
        <button className="border border-transparent text-white bg-[#00732F] font-Inter hover:shadow-lg transition duration-500 hover:border-white px-8 py-3 w-full sm:w-auto">
          Search
        </button>
      </div>

      {/* Subtext */}
      <div className="font-Poppins text-white text-center mt-4">
        Are you a buyer?{" "}
        <span className="underline cursor-pointer">
          Click here if you are looking to post a requirement
        </span>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <img className="w-full h-full object-cover" src={Rectangle} alt="Background" />
      </div>
    </section>
  );
}

export default Hero;

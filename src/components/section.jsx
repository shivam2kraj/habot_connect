
import React from "react";

const SupplierSection = () => {
  return (
    <div className="bg-[#e8f8ff] flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 md:px-20 lg:px-[180px] py-6 md:py-10">
      
      {/* Left Text */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-black font-bold font-Poppins text-2xl md:text-3xl lg:text-[30px]">
          Let Suppliers{" "}
          <span className="underline text-[#EB7150] cursor-pointer">
            Find You
          </span>
        </h2>
      </div>

      {/* Button */}
      <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded border border-transparent hover:shadow-lg transition-all duration-500 hover:border-white">
        Get Verified
      </button>
      
    </div>
  );
};

export default SupplierSection;

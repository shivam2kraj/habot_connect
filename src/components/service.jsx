import React, { useState } from "react";
import post from "../assets/post.png"

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <div className="bg-[#0b3c5d] flex justify-center items-center py-10 px-5">
      <div className="p-4 flex">
        {/* Left Side - Video Thumbnail */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="relative hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white shadow-lg">
            <img
              src={post} // Replace with actual video thumbnail
              alt="Video Thumbnail"
              className="rounded"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-red-600 text-white rounded-[15px] w-20 h-16 flex items-center justify-center border-[1px] hover:shadow-[0px_0px_10px_grey] transition-all duration-500 hover:border-red">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Tab Content */}
        <div className="w-1/ text-white pl-6">
          {/* Tabs */}
          <div className="flex space-x-8">
            <button
              className={`font-semibold font-Poppins text-[26px] ${activeTab === "buyer" ? "text-orange-500 border-b-2 border-orange-500" : "text-white"}`}
              onClick={() => setActiveTab("buyer")}
            >
              Buyer
            </button>
            <button
              className={`font-semibold font-Poppins text-[26px] ${activeTab === "supplier" ? "text-orange-500 border-b-2 border-orange-500" : "text-white"}`}
              onClick={() => setActiveTab("supplier")}
            >
              Supplier
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "buyer" ? (
              <ul className="space-y-2 mt-[50px]">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Post your requirements.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Sit back for multiple suppliers to contact you.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Choose among the suppliers based on ratings and reviews.
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 mt-[50px]">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Complete your profile and get verified.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Select service tags for relevant opportunities.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Reach out to buyers and expand your business.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

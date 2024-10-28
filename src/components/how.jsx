import React from "react";
import group from "../assets/group.png"
import group_1 from "../assets/group_1.png"
import group_2 from "../assets/group_2.png"
import group_3 from "../assets/group_3.png"
import group_4 from "../assets/group_4.png"
import group_5 from "../assets/group_5.png"

const HowItWorks = () => {
  
  return (
    <div className="bg-white p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">How it works?</h2>
        <p className="text-gray-600">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
          <img src={group} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Select Your Role and Sign Up</h3>
        </div>

        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
        <img src={group_1} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Buyers Post Your Requirements</h3>
        </div>

        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
        <img src={group_2} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Review, Select, and Contact the Best Suppliers</h3>
        </div>

        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
        <img src={group_3} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Suppliers Complete Your Profile and Get Notified for Opportunities</h3>
        </div>

        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
        <img src={group_4} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Contact Buyers and Share Your Quote for the Service</h3>
        </div>

        <div className="bg-[#e8f8ff] p-6 text-center rounded-lg">
        <img src={group_5} alt="" className="w-12 h-12 mx-auto text-black"/>
          <h3 className="text-black font-semibold mt-4">Both Parties Can Connect and Make Business Leave a Feedback</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;


import React from "react";
import right_arrow from "../assets/right_arrow.png";

function Project() {

    const locations = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah & Ajman",
        "Fujairah",
        "Ras Al Khaimah",
        "Umm Al Quwain"
    ];

    return (
        <section className="px-6 sm:px-10 md:px-20 lg:px-[80px] py-12 md:py-20 lg:py-[121px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[56px] font-Poppins text-[#000000] capitalize leading-snug font-bold">
                Ready to dive into <span className="text-[#271555]">HABOT?</span>
            </h1>

            <div className="flex flex-col lg:flex-row mt-10 lg:mt-[52px] gap-10 lg:gap-[192px]">
                
                {/* Left Section - Text & Button */}
                <div className="w-full lg:w-[45%] max-lg:h-auto relative h-auto bg-white rounded-lg px-4 py-6 md:py-10 lg:py-12">
                    <p className="text-base text-gray-700 mb-6">
                        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                    </p>

                    <div className="mt-6 flex justify-center lg:justify-start">
                        <button className="flex items-center gap-4 bg-[#00732F] text-white font-medium px-6 py-3 rounded-md hover:shadow-lg transition-all duration-500 hover:bg-[#005f27]">
                            Sign up Today! 
                            <img src={right_arrow} alt="Arrow icon" className="w-5" />
                        </button>
                    </div>
                </div>
                
                {/* Right Section - Location Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:w-[50%]">
                    {locations.map((location, index) => (
                        <button
                            key={index}
                            className="h-16 border border-orange-500 text-gray-700 font-medium rounded-md flex items-center justify-center hover:bg-orange-100 transition duration-300"
                        >
                            {location}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;

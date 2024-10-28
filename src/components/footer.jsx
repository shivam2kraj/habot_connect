
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#143e66] py-8">
            {/* Centered Container for Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white rounded-md">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-1">
                            <div className="bg-[#072F57] w-2 h-6"></div>
                            <div className="bg-[#456381] w-2 h-6"></div>
                            <div className="bg-[#8FB7E1] w-2 h-6"></div>
                            <h1 className="text-2xl font-bold ml-2">HABOT</h1>
                        </div>
                        <p className="text-sm mt-2">© R Singhania</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-12 md:space-x-20 mt-6 md:mt-0">
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="font-semibold">Company</h2>
                            <a href="#" className="text-sm mt-2 hover:underline">About</a>
                            <a href="#" className="text-sm hover:underline">FAQ</a>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="font-semibold">Terms</h2>
                            <a href="#" className="text-sm mt-2 hover:underline">Data privacy</a>
                            <a href="#" className="text-sm hover:underline">Terms</a>
                            <a href="#" className="text-sm hover:underline">Accessibility</a>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="font-semibold">Related</h2>
                            <a href="#" className="text-sm mt-2 hover:underline">Find Buyer</a>
                            <a href="#" className="text-sm hover:underline">Feedback</a>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6 md:mt-0">
                        <FaLinkedin className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

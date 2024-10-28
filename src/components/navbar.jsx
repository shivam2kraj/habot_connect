
import React, { useState } from "react";
import Hamburger from "../assets/Hamburger.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.png";
import arrow from "../assets/arrow.png";

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Navbar Container */}
            <div className="flex items-center justify-between bg-white text-[#6D6E71] px-6 py-4 shadow-lg backdrop-blur-sm">
                
                {/* Logo */}
                <img src={menu} alt="Menu"/>

                {/* Hamburger Icon (Mobile Only) */}
                <img src={Hamburger} onClick={() => setHamburger(!hamburger)} className="hidden max-sm:block max-md:block" alt="" />

                <nav className={`absolute ${hamburger ? 'translate-0' : 'translate-x-full'} hidden md:flex px-5 py-10 flex-col md:flex-row md:items-center md:gap-8 transition-transform duration-300 max-sm:flex max-md:flex ease-in-out max-[500px]:w-[80%] flex w-[50%] h-[100vh] shadow-[0px_0px_20px_#00000033] px-[20px] py-[40px] flex-col gap-[56px] top-[-20px] right-[-40px]`}>
                    <img src={close} onClick={() => setHamburger(!hamburger)} className="w-[40px]" alt="" />
                    <ul className="flex flex-col items-center gap-[12px] text-black font-Poppins">                       
                         <li>Find Suppliers</li>
                         <li>Find Service Tags<img src={arrow} alt="arrow" /></li>
                         <button className="border-[1px] hover:shadow-[0px_0px_10px_grey] text-[#00732F] transition-all duration-500 hover:border-white px-6 py-3 capitalize">
                             Login / Sign Up
                        </button>
                    </ul>
                 </nav>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10 ">
                    <ul className="flex items-center gap-6 font-Poppins">
                        <li className="hover:text-gray-600 cursor-pointer">Find Suppliers</li>
                        <li className="hover:text-gray-600 cursor-pointer flex items-center gap-1">
                            Find Service Tags
                            <img src={arrow} alt="Arrow" className="w-4 h-4" />
                        </li>
                    </ul>
                    <button className="border border-[#00732F] text-[#00732F] px-4 py-2 rounded hover:bg-[#00732F] hover:text-white transition-all duration-300">
                        Login / Sign Up
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;

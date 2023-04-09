import React from 'react'

import { useState, useEffect } from 'react';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`text-gray-200 body-font pt-[1rem] sticky top-0 ${isSticky ? 'shadow-lg py-0' : 'bg-transparent py-2'}`}>
            <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="flex space-x-8">

                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <a href="/">Home</a>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>

                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <a href="#projects">Projects</a>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>


                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <a href="#skills">Skills</a>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>


                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <a href="#contactme">Contact Me</a>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar;
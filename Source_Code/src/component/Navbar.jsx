import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
        <nav className={`text-gray-200 body-font bg-[#022A30] w-full sticky top-0 ${isSticky ? 'shadow-lg ' : ''}`}>
            <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="flex space-x-8">

                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <HashLink to={"/#Home"} >Home</HashLink>
                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>

                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <HashLink to={"/#projects"}>Projects</HashLink>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>


                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <HashLink to={"/#skills"}>Skills</HashLink>

                            <div className="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
                        </li>


                        <li className="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
                            <Link to={"/contact"}>Contact Me</Link>

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
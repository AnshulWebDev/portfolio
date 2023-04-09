import React from 'react'

const Navbar = () => {
  return (
    <nav class="text-gray-200 font-baijamjure pt-[1rem] ">
      <div class="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul class="flex space-x-8">

            <li class="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
              <a href="/">Home</a>

              <div class="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
            </li>

            <li class="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
              <a href="#projects">Projects</a>

              <div class="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
            </li>


            <li class="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
              <a href="#skills">Skills</a>

              <div class="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
            </li>


            <li class="text-gray-200 font-bold py-7 hover:text-[#DEFF58] cursor-pointer
             transition-all duration-500 relative group">
              <a href="#contactme">Contact Me</a>

              <div class="absolute bottom-0 w-full h-1 bg-[#DEFF58] hidden group-hover:block
            transition-all duration-500"></div>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar;
import React from 'react'

const Herosection = () => {
    const role=document.querySelector('role')
    const typeData = new Typed(".role", {
        strings: ["Frontend Developer",
                  "Web Developer",
                  "Coder"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });
    
    return (
        <section className="text-gray-200 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="text-4xl text-[#EEF3DB] font-medium pb-[2rem]">Hi! Anshul</div>
                    <div className="text-5xl text-[#EEF3DB] font-medium leading-10 pb-[2rem]">
                        I am a <span  className="font-semibold text-[#E0F780]" id='role'></span>
                    </div>
                    <p className="mb-8 w-[70%] text-[#B1C6C9] font-medium leading-relaxed pb-[2rem]">Passionate full-stack developer,
                        proficient in JavaScript, HTML, CSS, and Python. Constantly learning and seeking new challenges.</p>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-[#022A30] bg-[#E0F780] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEFF58] rounded text-lg"><a
                                href="https://github.com/AnsSec" target="_blank">Explore My Work</a></button>
                        <button
                            className="ml-4 inline-flex  text-[#EEF3DB] bg-[#022A30] border-0 py-2 px-4 focus:outline-none rounded text-lg"><a
                                href="mailto:contack@anshuldev.com" target="_blank">Hire Me</a></button>
                    </div>
                </div>
            </div>
            <div className="pb-4 border-b border-gray-600"></div>
        </section>
    )
}

export default Herosection
import React from 'react'
import htmlLogo from "../assets/LogosHtml5.svg"
import cssLogo from "../assets/LogosCss3.svg"
import tailwindcss from "../assets/LogosTailwindcssIcon.svg"
import javascriptlogo from "../assets/LogosJavascript.svg"
import linuxLogo from "../assets/LogosLinuxTux.svg"
import githubLogo from "../assets/LogosGithubIcon.svg"
import gitLogo from "../assets/LogosGitIcon.svg"
import rLogo from "../assets/react-js-icon.png"
const SkillsSection = () => {
  return (
    <>
    <section class="px-4 py-20 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="skills">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          class="max-w-lg mb-6 body-font text-3xl font-bold leading-none tracking-tight text-[#E0F780] sm:text-4xl md:mx-auto">
          <span class="relative inline-block">Me and MyTech Stack</span>
        </h2>
        <p class="text-base text-[#D7DFCA] md:text-lg">
          Hello there! I am Anshul Vishwakarma, a full-stack developer enthusiast. I love coding and
          creating beautiful and functional applications. My passion for technology has driven me to
          constantly learn and grow in this ever-evolving field.
        </p>
      </div>

      <div class="flex flex-wrap justify-center md:items-center gap-[4rem]  ">
        <a href="https://www.w3schools.com/html"><img class="cursor-pointer duration-500	hover:scale-125"
            src={htmlLogo} />
        </a>
        <a href="https://www.w3schools.com/css/"><img class="cursor-pointer duration-500	hover:scale-125"
            src={cssLogo} />
        </a>
        <a href="https://tailwindcss.com"><img class="cursor-pointer duration-500	hover:scale-125"
            src={tailwindcss} />
        </a>
        <a href="https://www.w3schools.com/js"><img class="cursor-pointer duration-500	hover:scale-125"
            src={javascriptlogo}/>
        </a>
        <a href="https://www.debian.org"><img class="cursor-pointer duration-500	hover:scale-125"
            src={linuxLogo} />
        </a>
        <a href="https://github.com"><img class="cursor-pointer duration-500	hover:scale-125"
            src={githubLogo}/>
        </a>
        <a href="https://git-scm.com"><img class="cursor-pointer duration-500	hover:scale-125"
            src={gitLogo} />
        </a>
        <a href="https://git-scm.com"><img class="cursor-pointer duration-500 w-7 h-7[32px]	hover:scale-125"
            src={rLogo} />
        </a>
      </div>

    </section>
    <div class="pb-4 border-b border-gray-600 md:w-4/5 m-auto"></div>
    </>
  )
}

export default SkillsSection;
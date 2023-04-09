import React from 'react';
import passwodGenerator from "../assets/projects/passwordgenerator.png";
import weatherApp from "../assets/projects/weather.png";
import tictactoe from "../assets/projects/tictactoe.png";
import githubLogo from "../assets/LogosGithubIcon.svg";
import webLogo from "../assets/Web.svg";
const ProjectSection = () => {
  return (
    <section className="text-gray-600 body-font" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-[#E0F780]">Projects</h1>
        </div>

        <ul className="w-full md:w-5/6 space-y-10 py-5 ">
          <li
            className="flex rounded-lg flex-col md:flex-row items-center bg-[#033E46] dark:bg-primary-gray round overflow-hidden">
            <div className="w-full md:w-1/3 h-60">
              <img className="h-full w-full object-cover rounded-lg" src={passwodGenerator}/>
            </div>
            <div className="w-full md:w-2/3 p-5">
              <h2 className="text-3xl text-[#EEF3DB] font-bold mb-3">
                Random Password Generator
              </h2>
              <p className="text-[#ABC3C6]">This project is a web-based tool that generates secure passwords with customizable parameters
                and users can choose to include uppercase letters, 
                lowercase letters, special characters, and numeric values in their passwords.
              </p>
              <div className="mt-8 font-semibold text-white flex items-center gap-2">
                <a href="https://github.com/AnsSec/PasswordGenerator"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out bg-[#033E46] hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={githubLogo}/>
                  Github
                </a>
                <a href="https://rpg.anshuldev.com"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out hover:brightness-100 hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={webLogo}/>
                  Website
                </a>
              </div>
            </div>
          </li>
        </ul>

        <ul className="w-full md:w-5/6 space-y-10 py-5 ">
          <li
            className="flex rounded-lg flex-col md:flex-row items-center bg-[#033E46] dark:bg-primary-gray round overflow-hidden">
            <div className="w-full md:w-1/3 h-60">
              <img className="h-full w-full object-cover rounded-lg" src={weatherApp}/>
            </div>
            <div className="w-full md:w-2/3 p-5">
              <h2 className="text-3xl text-[#EEF3DB] font-bold mb-3">
                Weather App
              </h2>
              <p className="text-[#ABC3C6]">This is a weather app that allows users to get weather information based on
                their current location or by searching for a custom location. The app utilizes the OpenWeatherMap
                free API to retrieve weather data.</p>
              <div className="mt-8 font-semibold text-white flex items-center gap-2">
                <a href="https://github.com/AnsSec/Weather-App"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out bg-[#033E46] hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={githubLogo}/>
                  Github
                </a>
                <a href="https://weather.anshuldev.com"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out hover:brightness-100 hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={webLogo}/>
                  Website
                </a>
              </div>
            </div>
          </li>
        </ul>

        <ul className="w-full md:w-5/6 space-y-10 py-5 ">
          <li
            className="flex rounded-lg flex-col md:flex-row items-center bg-[#033E46] dark:bg-primary-gray round overflow-hidden">

            <div className="w-full md:w-1/3 h-60">
              <img className="h-full w-full object-cover rounded-lg" src={tictactoe}/>
            </div>
            <div className="w-full md:w-2/3 p-5">
              <h2 className="text-3xl text-[#EEF3DB] font-bold mb-3">
                Tic Tac Toe Game
              </h2>
              <p className="text-[#ABC3C6]">
                This is a web-based implementation of the classic game of Tic Tac Toe, built using HTML, JavaScript, and
                Tailwind CSS.
              </p>
              <div className="mt-8 font-semibold text-white flex items-center gap-2">
                <a href="https://github.com/AnsSec/Tic-Tac-Toe"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out bg-[#033E46] hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={githubLogo}/>
                  Github
                </a>
                <a href="https://tic-tac-toe.anshuldev.com"
                  className="rounded-lg flex items-center gap-2 px-4 py-2 w-max transition duration-150 ease-in-out hover:brightness-100 hover:text-[#DEFF58]">
                  <img className="w-5 h-5" src={webLogo}/>
                  Website
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProjectSection;
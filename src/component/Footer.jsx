import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <footer class="body-font md:w-4/5 m-auto">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

        <span class="flex title-font font-medium items-center md:justify-start justify-center ml-3 text-[#EEF3DB] text-xl hover:text-[#E0F780] duration-[0.4s]">Anshul Vishwakarma </span>

        <p class="text-sm text-[#ABC3C6] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[text-[#ABC3C6]] sm:py-2 sm:mt-0 mt-4">
        &#10084; © 2023
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div class="flex gap-[1rem]">
            <div class="cursor-pointer text-[#EEF3DB] text-2xl	hover:text-[#E0F780] duration-[0.4s]">
              <a href="https://www.linkedin.com/in/av-dev/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div class="cursor-pointer text-[#EEF3DB] text-2xl	hover:text-[#E0F780] duration-[0.4s]">
              <a href="https://github.com/AnsSec"><FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div class="cursor-pointer text-[#EEF3DB] text-2xl	hover:text-[#E0F780] duration-[0.4s]">
              <a href="https://twitter.com/tbanshul"><FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div class="cursor-pointer text-[#EEF3DB] text-2xl	hover:text-[#E0F780] duration-[0.4s]">
              <a href="https://www.instagram.com/wassupanshul/"><FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div class="cursor-pointer text-[#EEF3DB] text-2xl	hover:text-[#E0F780] duration-[0.4s]">
              <a href="mailto:contack@anshuldev.com"><FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
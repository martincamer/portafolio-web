import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const AboutRedes = () => {
  return (
    <div className="sm:hidden  w-full text-[#ffff] bg-[#0a192f] border-t-4 py-3">
      <div>
        <div className="px-4 container mx-auto ">
          <p className="text-4xl inline font-bold border-b-4 border-pink-600 ">
            Social
          </p>
        </div>
        <div className="flex gap-5 py-6 px-4 items-center text-center">
          <div className="text-5xl flex items-center ">
            <a href="/">
              <FaGithub className="hover:scale-110 hover:duration-300 hover:text-gray-400"></FaGithub>
            </a>
          </div>

          <div className="text-5xl flex items-center ">
            <a href="/">
              <FaFacebook className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaFacebook>
            </a>
          </div>

          <div className="text-5xl flex items-center ">
            <a href="/">
              <FaTwitter className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaTwitter>
            </a>
          </div>

          <div className="text-5xl flex items-center ">
            <a href="/">
              <FaLinkedin className="hover:scale-110 hover:duration-300 hover:text-blue-500"></FaLinkedin>
            </a>
          </div>

          <div className="text-5xl flex items-center ">
            <a href="/">
              <HiOutlineMail className="hover:scale-110 hover:duration-300 hover:text-green-500"></HiOutlineMail>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRedes;

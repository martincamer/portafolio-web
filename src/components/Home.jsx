import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffff]">
          Martin Camer
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-pink-600">
          I'm FrontEnd Developer.
        </h2>
        <p className="text-2xl text-[#ffff] py-4 max-w-[600px]  ">
          I am a front-end developer and I am dedicated to the development of
          the user interface. I love the front-end and the technologies.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

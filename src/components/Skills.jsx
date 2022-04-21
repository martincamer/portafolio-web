import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Vue from "../assets/vue.png";
import Angular from "../assets/angular.png";
import Svelte from "../assets/svelte.png";
import Redux from "../assets/redux.png";
import Sass from "../assets/sass.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-xl font-bold">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon"></img>
            <p className="my-4 font-bold text-lg">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon"></img>
            <p className="my-4 font-bold text-lg">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="TAILWIND icon"
            ></img>
            <p className="my-4 font-bold text-lg">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Sass} alt="SASS icon"></img>
            <p className="my-4 font-bold text-lg">SASS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            ></img>
            <p className="my-4 font-bold text-lg">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon"></img>
            <p className="my-4 font-bold text-lg">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Vue} alt="VUE icon"></img>
            <p className="my-4 font-bold text-lg">VUE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={Angular}
              alt="ANGULAR icon"
            ></img>
            <p className="my-4 font-bold text-lg">ANGULAR</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Svelte} alt="SVELTE icon"></img>
            <p className="my-4 font-bold text-lg">SVELTE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Node} alt="NODE icon"></img>
            <p className="my-4 font-bold text-lg">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Mongo} alt="MONGO icon"></img>
            <p className="my-4 font-bold text-lg">MONGO DB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={FireBase}
              alt="FIREBASE icon"
            ></img>
            <p className="my-4 font-bold text-lg">FIREBASE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={GitHub} alt="GIT icon"></img>
            <p className="my-4 font-bold text-lg">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Redux} alt="REDUX icon"></img>
            <p className="my-4 font-bold text-lg">REDUX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

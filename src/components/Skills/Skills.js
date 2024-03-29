import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import Heroku from "../../assets/Heroku.png"
import Jest from "../../assets/Jest.png"
import MUI from "../../assets/MUI.png"
import NextJS from "../../assets/NextJS.png"
import Auth0 from "../../assets/Auth0.png"
import PostgreSQl from "../../assets/PostgreSQL.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full md:h-screen pt-20 pb-20 bg-[#535657] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#56dcc3] ">Skills </p>
          <p className="py-4 "> These are some the main tools I worked with during the School of Code as well as what I explored in my own time</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072]  hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={JavaScript} alt="JavaScript icon"/>
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={ReactImg} alt="ReactImg icon" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>


        

          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Heroku} alt="Heroku icon" />
            <p className="my-4">HEROKU</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Jest} alt="Jest icon" />
            <p className="my-4">JEST</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={MUI} alt="MUI icon" />
            <p className="my-4">MATERIAL UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5 mb-6" src={NextJS} alt="NextJS icon" />
            <p className="my-4">NEXT.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Auth0} alt="Auth0 icon" />
            <p className="my-4">AUTH0</p>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6d7072] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={PostgreSQl} alt="PostgreSQL icon" />
            <p className="my-4">PostgreSQL</p>
          </div>

          </div>
      </div>
    </div>
  );
};
export default Skills;

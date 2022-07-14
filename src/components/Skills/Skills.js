import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#535657] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-[#56dcc3] ">Skills </p>
          <p className="py-4 "> These are the main tools I've worked with</p>
        </div>

        <div className="w-full  grid  sm:grid-cols-6 gap-4 text-center py-8">

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

        </div>
      </div>
    </div>
  );
};
export default Skills;

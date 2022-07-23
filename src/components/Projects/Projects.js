import React from "react";
import Proficiency from   "../../assets/Proficiency.png"
import WeatherApp from "../../assets/WeatherApp.png"

const Work = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">My most recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Proficiency})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
                Proficiency Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
                TS WeatherApp
              </span>
              <div className="pt-8 text-center">
              <a href="https://tsweatherapp12.netlify.app/" target="_blank" rel="noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Paul2071/ts-weather-app" target="_blank" rel="noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Proficiency})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
                Proficiency Tracker
              </span>
              <div className="pt-8 text-center">
              <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

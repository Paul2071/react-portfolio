import React from "react";
import WeatherApp from "../../assets/WeatherApp.png"
import BoKApp from "../../assets/BoKApp.png"
import CastleLog from "../../assets/CastleLog.png"
import CastleJournal from "../../assets/CastleJournal.png"

const Work = () => {
  return (
    <div name="projects" className="w-full md:h-screen pt-20 pb-20 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Hover over or click each image for a "Demo" and "GitHub" link. The GitHub README offers context for each project</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Grid Item */}
        <div
            style={{ backgroundImage: `url(${CastleJournal})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
                Castle Journal
              </span>
              <div className="pt-8 text-center">
              <a href="https://vue-firebase-backend-22e0c.firebaseapp.com/" target="_blank" rel="noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Paul2071/castle-journal" target="_blank" rel="noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                  GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BoKApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
            Book Storage App 
              </span>
              <div className="pt-8 text-center">
                <a href="https://hackson5bok.vercel.app" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SchoolOfCode/final-project_back-end-hackson5" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    GitHub
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
                  GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${CastleLog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold bg-gray-700 p-4 rounded-lg tracking-wider">
                Castle-logue
              </span>
              <div className="pt-8 text-center">
              <a href="https://castlelogue.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Paul2071/castle-nextjs" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                  GitHub
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

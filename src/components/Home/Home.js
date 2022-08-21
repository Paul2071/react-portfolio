import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#535657]'>
        {/* container */}

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-[#56dcc3] text-2xl'>Hey. My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#9cdbcf] '>Paul Chamberlain</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#88b08d]'>An aspiring Fullstack Developer </h2>
            <p className='text-[#3cf73c] py-4 max-w-[700px] text-justify'>A graduate of the most recent School of Code cohort, I look forward to continuing my journey in tech and learning new skills along the way. At the minute, I am exploring new frontend and backend frameworks, in particular Next.js and MongoDB    </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 rounded-2xl flex items-center hover:bg-[#56dcc3] hover:border-[#56dcc3] hover:text-[#0a0a0a]'>Scroll Down For More
                
                <span className='group-hover:rotate-90 duration-300'>

                <HiArrowNarrowRight className='ml-3 ' />
                </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
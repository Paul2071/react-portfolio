import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-slate-600'>
        {/* conatiner */}

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 text-2xl'>Hey. My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Paul Chamberlain</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Junior Developer </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>A recent graduate from the School of Code, I look forward to progressing my journey in tech and learning new skills. At the minute, I am focused on React and CSS and plan to broaden my knowledge of back-end tech-stacks next.   </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Projects 
                
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
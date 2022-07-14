import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl  font-bold'>
              <p className=''>Hey again. For more detailed information about me, check out my C.V in the "Contact" section. </p>
              
              
            </div>
            <div>
              <p className='text-justify'> With a BA in Politics and learning Japanese at University, I took the obvious career path and became a Bookseller. 11 years later, I discovered what kept me engaged for so long - my passion for learning. Now I want to use my passion and combine it with the interpersonal and problem solving skills I learned to work as part of a team to create applications.


              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

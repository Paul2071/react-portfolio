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
              <p className=''>Hey again. A few hobbies of mine - books, board games and playing cricket. </p>
              
              
            </div>
            <div>
              <p className='text-justify'> With a BA in Politics and learning Japanese at University, I took the obvious career path and became a Bookseller. After 11 wonderful years, I wanted something a little more fulfilling from my career and re-trained through the School of Code. Whilst at School of Code, I learnt how to solve problems using code how to work in a tech team

              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

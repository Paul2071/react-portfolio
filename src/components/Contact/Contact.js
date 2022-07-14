import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#535657] flex justify-center items-center p-4'>
        <form method='POST' action={process.env.REACT_APP_GETFORM} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#56dcc3] text-gray-300 '>Contact</p>
                <p className='text-gray-300  py-4 hidden lg:block'> Get in touch via the form or the socials on the left </p>
                <p className='text-gray-300 py-4  md:hidden'> Get in touch via the form below </p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#56dcc3] hover:border-[#56dcc3] hover:text-[#535657] px-4 py-3 my-8 rounded-2xl mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
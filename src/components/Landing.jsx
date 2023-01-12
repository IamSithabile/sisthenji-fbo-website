import React from 'react'

function Landing() {
  return (
    <section className='   h-screen mx-auto'>
      <div className='  flex justify-end mt-[-8rem] w-full  absolute h-full'>
        <img
          src='src\assets\test.png'
          alt='hero'
          className=' relative left-0 top-0 '
        />
        <div className='bg-[#b1b0b0]  relative right-0 top-0 h-full w-full backdrop-blur '></div>
      </div>
      <div className=' flex  justify-end items-center h-screen max-w-7xl mx-auto    '>
        <div className='w-1/2  p-10 mt-[-6rem]  bg-white/5 backdrop-blur-md '>
          <h1 className='text-9xl font-bold text-green-700 italic   great-vibes-text font-great-vibes'>
            Aloe There!
          </h1>
          <p className='text-xl my-8 leading-10 '>
            Welcome to my Forever Living website! I'm so glad you're here. My
            name is Thenjiswa and I'm a loving mother of three and an
            entrepreneur.
          </p>
          <div className='text-xl'>
            <button className='py-3 px-6 cursor-pointer border-none bg-green-600 text-white rounded-md '>
              Message Me
            </button>
            <button className='py-3 px-6 cursor-pointer border-green-600 border-2 bg-white/30 backdrop-blur-sm ml-4 text-green-800 rounded-md '>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing

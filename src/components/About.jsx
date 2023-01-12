import React from 'react'

const About = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <h2 className='text-5xl text-center mb-20 font-semibold text-green-600 italic'>
        About Me
      </h2>
      <div className='flex justify-around  items-center'>
        <div className='w-1/3  relative'>
          <div className='absolute top-0 left-0 shadow-md shadow-black/30 bg-green-400 rounded-md z-0 w-full h-full'></div>
          <img
            src='src/assets/hero.jpg'
            alt='thenji'
            className='w-full rounded-md relative z-10 mt-4 ml-4'
          />
        </div>
        <div className='w-1/2 leading-relaxed text-lg '>
          <p>
            I discovered Forever Living nearly 20 years ago when I was
            struggling with ulcers and had to stop eating certain foods.
            Desperate for relief, I tried the Forever Living Aloe drink, Fields
            of Green, and Active-Probiotic. To my surprise, these products not
            only helped improve my condition, but they completely eliminated my
            ulcers. I was shocked and grateful for the transformative power of
            these products.
          </p>
          <p className='py-8'>
            This personal experience with Forever Living was the catalyst for my
            journey as a business owner. When I was invited to join the Forever
            Living team, I was pleasantly surprised to learn about the numerous
            opportunities available to me, including the power of a
            low-barrier-to-entry business opportunity that can be used as a
            secondary or even main income source. Many people, including myself,
            have used this opportunity to fire their boss and become
            self-sustaining.
          </p>
          <p>
            On this website, you'll find information about some of my favorite
            Forever Living products, including our delicious drinks, the
            nourishing Multi-Maca, the energizing Bee-pollen, and the
            immune-boosting Garlic-Thyme. I encourage you to browse through the
            products section to learn more about how these amazing products can
            benefit you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

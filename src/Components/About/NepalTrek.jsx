import React from 'react'
import Footer from '../Home/Footer'
const NepalTrek = () => {
  return (
    <>
    <div className="pt-24 mt-10 px-6">

      <div className="flex flex-col md:flex-row gap-10 items-stretch">

        <div className="md:w-1/2 text-center">

          <div className="flex flex-wrap gap-2 mt-10 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-900 font-light">
              About
            </h1>

            <h1 className="sm:text-4xl md:text-5xl font-serif font-light text-gray-800">
              Us
            </h1>
          </div>

          <p className="text-left ml-9 text-base sm:text-lg leading-relaxed mt-4">
            Nepal Trek welcomes you to an unforgettable adventure through the breathtaking  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis amet assumenda eos praesentium necessitatibus accusamus tenetur voluptatem officiis deleniti dolorum aliquid ea aliquam vero quaerat eligendi nemo blanditiis velit.landscapes of Nepal, where every trail leads to stunning mountain views and memorable experiences.
          </p>

          <p className="text-left text-base ml-9 sm:text-lg leading-relaxed mt-4">
            Explore wor Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, saepe. Earum odio eveniet sequi adipisci, officiis commodi expedita ratione, totam quidem distinctio delectus ipsam? Cumque voluptate dicta perspiciatis harum totam.ld-famous trekking destinations like Everest Base Camp and the Annapurna region while discovering Nepal's rich culture, peaceful mountain trails, and stunning natural scenery.
          </p>

        </div>

        <div
          className="md:w-1/2 overflow-hidden self-stretch -mr-6 -mt-33 min-h-screen"
          style={{
            clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        >
          <img
            src="https://images.wallpaperscraft.com/image/single/mountain_peak_tourists_148482_3840x2160.jpg"
            className="w-full h-full object-cover object-right-top"
            alt="Nepal Trek"
          />
        </div>

      </div>
         
    </div>
    <Footer/>
    </>
    
  )
}

export default NepalTrek
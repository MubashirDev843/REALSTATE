import React, { useEffect } from 'react'
import heroimg from '../assets/assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:800,
      easing:'ease-in-sine',
      delay: 100,
    });
  },[])



  return (
    <>
    <div>
    <section id='hero' className='w-[95%] h-[600px] m-auto  bg-cover bg-center  rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{backgroundImage: `url(${heroimg})`}}>
      <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leadng-[60px]'>Find your next home in Las Vegas</h1>
      <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat voluptatem magni nemo deleniti ad, laboriosam ut. Libero veniam fuga velit expedita voluptas ipsa, minima illum repellendus, molestias quaerat quo.</p>
    </section>
      </div>
      {/* Form start from here */}

      <div data-aos="zoom-in" id='form' className='lg:w-[70%] z-50 w-full m-auto grid lg: grid-cols-4 justify-center items-center gap-6 p-8  rounded-xl -mt-14 '>
        <div className='w-full'>
          <h1 className='text-black  font font-semibold dark:text-white'>LOCATION</h1>
          <input type="text" placeholder='Enter an address,state , city or pincode' className='bg-white p-2 w-full  mt-2 border-b-[1px] border-[#c9c7c1]'/>
        </div>

        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-black '>TYPE</h1>
          <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value="" disabled selected>Select Property</option>
            <option value="Option1">Rentals</option>
            <option value="Option1">Sales</option>
            <option value="Option1">Commerical</option>
          </select>
        </div>

        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-black'>CATEGORY</h1>
          <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value="" disabled selected>Property category</option>
            <option value="Option1">Apartment</option>
            <option value="Option1">Dupless</option>
            <option value="Option1">Condos</option>
            <option value="Option1">Condos</option>
            <option value="Option1">Condos</option>
          </select>
        </div>
        <div className='w-full'>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black  text-lg p-4  w-full  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110  transition-transform  duration-300  '>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Hero;

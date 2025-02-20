import React from 'react'
import { useEffect } from 'react'
// import area1 from "./assets/assets/images/area1.jpg"
// import area2 from "./assets/assets/images/area2.jpg"
// import area3 from "./assets/assets/images/area3.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css';

const PopluarArea = () => {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:800,
      easing:'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
 <section className='lg:w-[90%] w-full h-fit m-auto  bg-cover bg-center rounded-xl flex justify-center flex-col  item-center lg:px-20px px-6 py-20 gap-20'>
  <div id='top' className='w-full  grid  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
    <div data-aos="zoom-iimport React from 'react'
import { useEffect } from 'react'
import area1 from "../assets/assets/images/area1.jpg"
import area2 from "../assets/assets/images/area2.jpg"
import area3 from "../assets/assets/images/area3.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css';

const PopluarArea = () => {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:800,
      easing:'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
 <section className='lg:w-[90%] w-full h-fit m-auto  bg-cover bg-center rounded-xl flex justify-center flex-col  item-center lg:px-20px px-6 py-20 gap-20'>
  <div id='top' className='w-full  grid  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
    <div>
    <h1 data-aos="zoom-in" className='text-red-500 dark:text-white '>
      POPULAR AREA
    </h1>
    <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>
     Explore More <br /> Popular Areas </h1>
    </div>
    <div className='grid lg:grid-cols-3 col-span-2 grid-col-1 justify-center items-center gap-6 '>
      <div data-aos="zoom-in" data-aos-delay="400 " style={{backgroundImage: `url(${area1})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
      <div data-aos="zoom-in" data-aos-delay="400 " style={{backgroundImage: `url(${area2})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
      <div data-aos="zoom-in" data-aos-delay="400 " style={{backgroundImage: `url(${area3})`}} className='h-[400px] bg-cover bg-center rounded-xl'></div>
    </div>
  </div> 
  <div id='bottom' className='w-full  grid lg:grid-cols-3 grid-cols-1 lg:justify-center  justify-start items-center gap-6'>
    <div data-aos="slide-up" data-aos-delay="200" className=' flex justify-center lg:items-center gap-8 w-full'>
      <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
      <h1>ACTIVE <br /> LISTINGS</h1>
    </div>
    <div data-aos="slide-up" data-aos-delay="200" className=' flex justify-center lg:items-center gap-8 w-full'>
      <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
      <h1>ACTIVE <br /> LISTINGS</h1>
    </div>
    <div data-aos="slide-up" data-aos-delay="200" className=' flex justify-center lg:items-center gap-8 w-full'>
      <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
      <h1>ACTIVE <br /> LISTINGS</h1>
    </div>
  </div>

 </section>
  )
}

export default PopluarArea
n" className='text-red-500 dark:text-white '>
      POPULAR AREA

    </div>

  </div> 

 </section>
  )
}

export default PopluarArea


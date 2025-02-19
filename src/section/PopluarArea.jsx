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
    <div data-aos="zoom-in" className='text-red-500 dark:text-white '>
      POPULAR AREA

    </div>

  </div> 

 </section>
  )
}

export default PopluarArea


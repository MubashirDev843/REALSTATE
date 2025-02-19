import React from 'react'
import { useEffect } from 'react';
import aboutimg from '../assets/assets/images/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:800,
      easing:'ease-in-sine',
      delay: 100,
    });
  },[])
  return (
    <section id='about' className='w-full m-auto  lg:px-40 px-10  py-20 grid lg:grid-cols-2 grid-cols-1 justify-center  items-center gap-10'>
      <div>
        <img data-aos="zoom-in" src={aboutimg} alt="About image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
      </div>

    </section>
  )
}

export default About

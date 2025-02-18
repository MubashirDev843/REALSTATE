import React from 'react';
import Hero from './section/Hero';
import Header from './component/Header';
import About from './section/About';
import PopluarArea from './section/PopluarArea';
import Properties from './section/Properties';
import Footer from './component/Footer';

const App =() =>{
  return(
   <>
    <Header/>
    <Hero/>
    <About />
    <PopluarArea/>
    <Properties/>
    <Footer/>
   </>

  )
}
 export default App;
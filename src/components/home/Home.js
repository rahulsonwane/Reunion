import React from 'react'
import Best from '../best/Best'
import Featured from '../featured/Featured'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Best/>
        <Featured/>
        <Footer/>
        
    </div>
  )
}

export default Home
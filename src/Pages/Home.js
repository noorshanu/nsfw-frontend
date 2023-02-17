import React, { useEffect, useState } from 'react'
import Ecosystem from '../Components/Ecosystem/Ecosystem'
import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Gallery/Gallery'
import Hero from '../Components/Hero/Hero'
import AddressBar from '../Components/Navbar/AddressBar'
import MobNavbar from '../Components/Navbar/MobNavbar'
import NavbarPc from '../Components/Navbar/NavbarPc'
import Roadmap from '../Components/Roadmap/Roadmap'
import Tokenomic from '../Components/Token/Tokenomic'
import Loader from '../Loader/Loader'

function Home() {
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
   
    <div>
     {
      loading ?
      <Loader/>
      :
      <div data-aos="zoom-out" data-aos-duration="1000" >
      <AddressBar/>
      <NavbarPc/>
      <MobNavbar/>
      <Hero/>
      <Ecosystem/>
      <Tokenomic/>
      <Roadmap/>
      <Gallery/>
      <Footer/>
      </div>
    }

    </div>
  )
}

export default Home
import React from 'react'
import Ecosystem from '../Components/Ecosystem/Ecosystem'
import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Gallery/Gallery'
import Hero from '../Components/Hero/Hero'
import AddressBar from '../Components/Navbar/AddressBar'
import NavbarPc from '../Components/Navbar/NavbarPc'
import Roadmap from '../Components/Roadmap/Roadmap'
import Tokenomic from '../Components/Token/Tokenomic'

function Home() {
  return (
    <>
    <AddressBar/>
    <NavbarPc/>
    <Hero/>
    <Ecosystem/>
    <Tokenomic/>
    <Roadmap/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home
import React from 'react'
import Ecosystem from '../Components/Ecosystem/Ecosystem'
import Hero from '../Components/Hero/Hero'
import AddressBar from '../Components/Navbar/AddressBar'
import NavbarPc from '../Components/Navbar/NavbarPc'
import Tokenomic from '../Components/Token/Tokenomic'

function Home() {
  return (
    <>
    <AddressBar/>
    <NavbarPc/>
    <Hero/>
    <Ecosystem/>
    <Tokenomic/>
    </>
  )
}

export default Home
import React from 'react'
import Hero from '../Components/Hero/Hero'
import AddressBar from '../Components/Navbar/AddressBar'
import NavbarPc from '../Components/Navbar/NavbarPc'

function Home() {
  return (
    <>
    <AddressBar/>
    <NavbarPc/>
    <Hero/>
    </>
  )
}

export default Home
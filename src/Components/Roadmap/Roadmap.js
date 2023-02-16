import React from 'react'
import BackBG from '../../Assets/bg.png'
import './Road.css'

function Roadmap() {
  return (
    <>
    <img src={BackBG} alt="" className='road-dapp'/>
    <section className='Roadmap'>
    <div className="container">
          <div className="header-text text-center">
            <h2>Roadmap</h2>
            <hr className="low-hr" />
          </div>

        </div>

    </section>
    </>
  )
}

export default Roadmap
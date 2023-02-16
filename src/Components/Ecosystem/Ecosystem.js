import React from 'react'
import './eco.css'
import EcoList from './EcoList'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import Nft1 from '../../Assets/Eco/gal/img1.png'
import Nft2 from '../../Assets/Eco/gal/img2.svg'




function Ecosystem() {
  return (
    <>
    <section className='eco_system'>
        <div className='container'>
            <div className='header-text text-center'>
                <h2>Our Ecosystem</h2>
                <hr className='low-hr'/>

            </div>
            <div className='eco-grid'>

            <Swiper
        slidesPerView={5}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Nft2} alt=""/></SwiperSlide>
      </Swiper>
            </div>

        </div>

    </section>
    <EcoList/>
    </>
  )
}

export default Ecosystem
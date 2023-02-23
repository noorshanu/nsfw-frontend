import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination } from "swiper";

import Nft1 from "../../Assets/Gallery/gal1.jpg";
import Nft2 from "../../Assets/Gallery/gal2.jpg";
import Nft5 from "../../Assets/Gallery/gal3.jpg";
import Nft7 from "../../Assets/Gallery/gal4.jpg";
import Nft8 from "../../Assets/Gallery/gal6.jpg";
import Cap6 from "../../Assets/Gallery/gal7.jpg"
import Cap7 from "../../Assets/Gallery/gal8.jpg"


function GalSwipe1() {
  return (
    <>
    <div className='gal-box' data-aos="fade-left" data-aos-duration="1000"> 
    <Swiper
            slidesPerView={5}
            spaceBetween={30}
            speed={1200}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              // reverseDirection:true,

            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Nft5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Cap6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Cap7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft2} alt="" />
            </SwiperSlide>
          </Swiper>

    </div>
    </>
  )
}

export default GalSwipe1
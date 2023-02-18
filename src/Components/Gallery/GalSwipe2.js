import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination } from "swiper";

import Nft1 from "../../Assets/Eco/gal/img1.png";
import Nft2 from "../../Assets/Eco/gal/img2.svg";
// import Nft4 from "../../Assets/Eco/gal/img4.svg";
import Nft5 from "../../Assets/Eco/gal/img5.svg";
import Cap4 from '../../Assets/cap4.png'
import Nft7 from "../../Assets/Eco/gal/img7.svg";
import Nft8 from "../../Assets/Eco/gal/img8.svg";

function GalSwipe2() {
  return (
    <>
    <div className='gal-box' data-aos="fade-right"
    >
    <Swiper
            slidesPerView={5}
            spaceBetween={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              reverseDirection:true,

            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Nft1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Cap4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft5} alt="" />
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

export default GalSwipe2
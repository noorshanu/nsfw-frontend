import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination } from "swiper";

import Nft1 from "../../Assets/Gallery/gal9.jpg";
import Nft2 from "../../Assets/Gallery/gal10.jpg";
import Nft4 from "../../Assets/Gallery/gal11.jpg";
import Nft5 from "../../Assets/Gallery/gal12.jpg";
import Cap4 from '../../Assets/Gallery/gal13.jpg'
import Nft7 from "../../Assets/Gallery/gal14.jpg";
import Nft8 from "../../Assets/Gallery/gal15.jpg";
import Nft9 from "../../Assets/Gallery/gal16.jpg";

function GalSwipe2() {
  return (
    <>
    <div className='gal-box' data-aos="fade-right" data-aos-duration="1000"
    >
    <Swiper
            slidesPerView={5}
            spaceBetween={30}
            speed={1200}
            autoplay={{
              delay: 1,
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
              <img src={Nft4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nft9} alt="" />
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
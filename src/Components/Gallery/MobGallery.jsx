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
import Nft4 from "../../Assets/Eco/gal/img4.svg";


function MobGallery() {
  return (
    <section className='mob-gal-1' style={{marginTop:'30px'}}>

        <div className='container'>
            <div className=' text-center'>
            <Swiper
            slidesPerView={1}
            speed={1100}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              // reverseDirection:true,

            }}
            spaceBetween={10}
          
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
              <img src={Nft4} alt="" />
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


<div className='mt-10' style={{marginTop:'30px'}}>
<Swiper
            slidesPerView={1}
            speed={1100}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              reverseDirection:true,

            }}
            spaceBetween={10}
          
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
              <img src={Nft4} alt="" />
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


        </div>
    </section>
  )
}

export default MobGallery
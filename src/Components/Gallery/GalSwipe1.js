import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import Nft1 from "../../Assets/Eco/gal/img1.png";
import Nft2 from "../../Assets/Eco/gal/img2.svg";
import Nft4 from "../../Assets/Eco/gal/img4.svg";
import Nft5 from "../../Assets/Eco/gal/img5.svg";

import Nft7 from "../../Assets/Eco/gal/img7.svg";
import Nft8 from "../../Assets/Eco/gal/img8.svg";
import Cap6 from '../../Assets/cap6.png'


function GalSwipe1() {
  return (
    <>
    <div className='gal-box' data-aos="fade-left"
    
     data-aos-offset="1000"
     data-aos-duration="1000">
    <Swiper
            slidesPerView={5}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
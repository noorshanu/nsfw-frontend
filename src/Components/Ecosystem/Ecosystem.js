import React from "react";
import "./eco.css";
import EcoList from "./EcoList";
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
import SideCon from '../../Assets/elements/hero-element.png'
import Nft7 from "../../Assets/Eco/gal/img7.svg";
import Nft8 from "../../Assets/Eco/gal/img8.svg";

function Ecosystem() {
  return (
    <>
    <img src={SideCon} alt="" className="side-1"/>
      <section className="eco_system">
        <div className="header-text text-center">
          <h2>Our Ecosystem</h2>
          <hr className="low-hr" />
        </div>
        <div className="eco-grid">
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
      </section>
      <EcoList />
    </>
  );
}

export default Ecosystem;

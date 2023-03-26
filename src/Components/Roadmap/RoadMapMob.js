import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function RoadMapMob() {
  return (
    <div className='road-map-mob'>
 <div className="eco-grid-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
             <div className='container'>
                <div>
                <div className="road_num">
              <h1>01</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>02</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>03 </h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>04</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
         
           
          
        
          </Swiper>
        </div>


    </div>
  )
}

export default RoadMapMob
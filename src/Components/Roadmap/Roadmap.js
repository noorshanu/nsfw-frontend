import React from "react";
import BackBG from "../../Assets/bg.png";
// import BackBGm from "../../Assets/bg-m.png";
import "./Road.css";
import LightImg from '../../Assets/elements/light-line.svg'
import Roadr from '../../Assets/elements/roadr.png'
import Roadl from '../../Assets/elements/roadl.png'
import RoadEle from '../../Assets/elements/road-ele.png'
import RoadEle2 from '../../Assets/elements/road-ele2.png'
import RoadEle3 from '../../Assets/elements/road-ele3.png'
import RoadEle4 from '../../Assets/elements/road-ele4.png'
import RoadMapMob from "./RoadMapMob";
function Roadmap() {
  return (
    <>
      <img src={BackBG} alt="" className="road-dapp" />
      {/* <img src={BackBGm} alt="" className="road-dapp2" /> */}
      <section className="Roadmap" id="roadmap">
        <div className="container">
          <div className="header-text text-center">
            <h2>Roadmap</h2>
            <hr className="low-hr" />
          </div>
             <RoadMapMob/>
          <img src={RoadEle3} alt="" className="road-ele3"/>
       <div className="pc-roadmap">
       <div className="first-b">
            <div className="road_num">
              <h1 data-aos="fade-up-left" data-aos-duration="1000">01</h1>
            </div>
            <div className="road-d-box">
              <div className="road_details" data-aos="fade-up-right" data-aos-duration="1000">
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
              <img src={LightImg} alt="" className='light-icon3'/>
            </div>
          </div>

          <div className="first-b">
            <div className="road-d-box">
              <div className="road_details2"  data-aos="fade-up-left" data-aos-duration="1000">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
                <img src={Roadr} alt="" className="roadr"/>
              </div>
              <img src={LightImg} alt="" className='light-icon4'/>
            </div>

            <div className="road_num2">
              <h1 data-aos="fade-up-right" data-aos-duration="1000">02</h1>
            </div>
          </div>




          <div className="first-b">
            <div className="road_num">
              <h1 data-aos="fade-up-left" data-aos-duration="1000">03</h1>
            </div>
            <div className="road-d-box">
              <div className="road_details" data-aos="fade-up-right" data-aos-duration="1000">
                <ul>
                  <li>Creation of concept</li>
                  <li>Creation of Website & Tokenomics</li>
                  <li>Community Creation</li>
                  <li>Launch of Image Generative TG Bot</li>
                  <li>launch of ERC 20 Token</li>
                  <li>Ecosystem Showcase</li>
                  <li>Community Contests & Hype Creation</li>
                </ul>
                
                <img src={Roadl} alt="" className="roadl"/>
              </div>
              <img src={LightImg} alt="" className='light-icon3'/>
            </div>
          </div>

<img src={RoadEle} alt="" className="road-ele"/>
<img src={RoadEle2} alt="" className="road-ele2"/>

          <div className="first-b">
            <div className="road-d-box">
              <div className="road_details2" data-aos="fade-up-left" data-aos-duration="1000">
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
              <img src={LightImg} alt="" className='light-icon4'/>
            </div>

            <div className="road_num2">
              <h1 data-aos="fade-up-right" data-aos-duration="1000">04</h1>
            </div>
          </div>

       </div>
    

        </div>
        <img src={RoadEle4} alt="" className="road-ele4"/>
      </section>
    </>
  );
}

export default Roadmap;

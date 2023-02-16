import React from "react";
import BackBG from "../../Assets/bg.png";
import "./Road.css";
import LightImg from '../../Assets/elements/light-line.svg'
import Roadr from '../../Assets/elements/roadr.png'
import Roadl from '../../Assets/elements/roadl.png'
import RoadEle from '../../Assets/elements/road-ele.png'
import RoadEle2 from '../../Assets/elements/road-ele2.png'
function Roadmap() {
  return (
    <>
      <img src={BackBG} alt="" className="road-dapp" />
      <section className="Roadmap">
        <div className="container">
          <div className="header-text text-center">
            <h2>Roadmap</h2>
            <hr className="low-hr" />
          </div>

          <div className="first-b">
            <div className="road_num">
              <h1>01</h1>
            </div>
            <div className="road-d-box">
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
              <img src={LightImg} alt="" className='light-icon3'/>
            </div>
          </div>

          <div className="first-b">
            <div className="road-d-box">
              <div className="road_details2">
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
              <h1>02</h1>
            </div>
          </div>




          <div className="first-b">
            <div className="road_num">
              <h1>03</h1>
            </div>
            <div className="road-d-box">
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
                
                <img src={Roadl} alt="" className="roadl"/>
              </div>
              <img src={LightImg} alt="" className='light-icon3'/>
            </div>
          </div>

<img src={RoadEle} alt="" className="road-ele"/>
<img src={RoadEle2} alt="" className="road-ele2"/>

          <div className="first-b">
            <div className="road-d-box">
              <div className="road_details2">
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
              <h1>04</h1>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Roadmap;

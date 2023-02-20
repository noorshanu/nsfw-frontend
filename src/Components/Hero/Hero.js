import React from "react";
import "./Hero.css";

import Mainbg from '../../Assets/mainbg.mp4'

import { MdQrCode } from "react-icons/md";
function Hero() {
  return (
    <section className="nsf-bg">
       <video
       playsInline
       loop
       autoPlay
       muted
        src={Mainbg}
           
      />    
      <div className="container   content2">
        <div className="row  justify-content-center">
          <div className="col-md-6 nsf-first">
            <div className="head-top" data-aos="zoom-out" data-aos-duration="3000" >
              <h1>Build</h1>
              <h1>Your</h1>
              <h1>NSFW</h1>
              <h1>Fantasies</h1>
            </div>

            <div className="btn-wrap" data-aos="zoom-out" data-aos-duration="3000" >
              <a href="/" className="button-background-move">
                Explore
              </a>
              <a href="/" className="button-background-move">
                Explore
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="top-box-hero">
              <div className="hero-demo-box">
                <div className="eth-box" data-aos="zoom-out">
                  <h1>2.01 ETH</h1>
                </div>

                <div className="qr-box">
                  <h2>
                    <span>
                      <MdQrCode />{" "}
                    </span>
                    KAIJIN
                  </h2>
                  <p>1023</p>
                </div>
              </div>

              <div className="hero-demo-box2" data-aos="zoom-out" data-aos-duration="3000" >
                <div className="eth-box">
                  <h1>2.01 ETH</h1>
                </div>

                <div className="qr-box">
                  <h2>
                    <span>
                      <MdQrCode />{" "}
                    </span>
                    BUSHIDO
                  </h2>
                  <p>1023</p>
                </div>
              </div>

              <div className="hero-demo-box3" data-aos="zoom-out" data-aos-duration="3000" >
                <div className="eth-box">
                  <h1>2.01 ETH</h1>
                </div>

                <div className="qr-box">
                  <h2>
                    <span>
                      <MdQrCode />{" "}
                    </span>
                    BUSHIDO
                  </h2>
                  <p>1023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

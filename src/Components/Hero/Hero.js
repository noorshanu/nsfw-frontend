import React from "react";
import "./Hero.css";

import { MdQrCode } from "react-icons/md";
function Hero() {
  return (
    <section className="nsf-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 nsf-first">
            <div className="head-top">
              <h1>Build</h1>
              <h1>Your</h1>
              <h1>NSFW</h1>
              <h1>Fantasies</h1>
            </div>

            <div className="btn-wrap">
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
                <div className="eth-box">
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

              <div className="hero-demo-box2">
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

              <div className="hero-demo-box3">
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

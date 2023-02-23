import React, { useState } from "react";
import One from "../../Assets/Eco/one.png";
import Play from "../../Assets/Eco/play.png";
import Nft from "../../Assets/Eco/nft.png";
import Nft2 from "../../Assets/Eco/nft2.png";
import last from "../../Assets/Eco/last.png";

function EcoList() {
  const [display, setDisplay] = useState("notdisplayed");

  const [display1, setDisplay1] = useState("notdisplayed");
  const [display2, setDisplay2] = useState("notdisplayed");
  const [display3, setDisplay3] = useState("notdisplayed");
  const [display4, setDisplay4] = useState("notdisplayed");



  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };



  const showButton1 = (e) => {
    e.preventDefault();
    setDisplay1("displayed");
  };

  const hideButton1 = (e) => {
    e.preventDefault();
    setDisplay1("notdisplayed");
  };


  const showButton2 = (e) => {
    e.preventDefault();
    setDisplay2("displayed");
  };

  const hideButton2 = (e) => {
    e.preventDefault();
    setDisplay2("notdisplayed");
  };




  const showButton3 = (e) => {
    e.preventDefault();
    setDisplay3("displayed");
  };

  const hideButton3 = (e) => {
    e.preventDefault();
    setDisplay3("notdisplayed");
  };



  const showButton4 = (e) => {
    e.preventDefault();
    setDisplay4("displayed");
  };

  const hideButton4 = (e) => {
    e.preventDefault();
    setDisplay4("notdisplayed");
  };



  return (
    <section className="eco-list">
      <div className="container">
        <div className="eco-list-grid">
          <div
            className="eco-box"
            data-aos="fade-up"
            data-aos-duration="1000"
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
          >
            <div className="eco-icon-box">
              <img src={One} alt="" />
            </div>
            <p>NSFW Image Generator</p>
          </div>
          {/* */}
          <div className={`box-1-eco  ${display} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>

          <div className="eco-box" data-aos="fade-up" data-aos-duration="1000"
           onMouseEnter={(e) => showButton1(e)}
           onMouseLeave={(e) => hideButton1(e)}
          >
            <div className="eco-icon-box">
              <img src={Play} alt="" />
            </div>
            <p>NSFW Video Generator</p>
          </div>
          <div className={`box-1-eco  ${display1} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>
          <div className="eco-box" data-aos="fade-up" data-aos-duration="2000"
             onMouseEnter={(e) => showButton2(e)}
             onMouseLeave={(e) => hideButton2(e)}>
            <div className="eco-icon-box">
              <img src={Nft} alt="" />
            </div>
            <p>One Click NFT Minter</p>
          </div>

          <div className={`box-1-eco  ${display2} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>

          <div className="eco-box" data-aos="fade-up" data-aos-duration="2000"
             onMouseEnter={(e) => showButton3(e)}
             onMouseLeave={(e) => hideButton3(e)}>
            <div className="eco-icon-box">
              <img src={Nft2} alt="" />
            </div>
            <p>NFT Marketplace</p>
          </div>

          <div className={`box-1-eco  ${display3} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>

          <div className="eco-box" data-aos="fade-up" data-aos-duration="3000"
             onMouseEnter={(e) => showButton4(e)}
             onMouseLeave={(e) => hideButton4(e)}>
            <div className="eco-icon-box">
              <img src={last} alt="" />
            </div>
            <p>Governance Dao</p>
          </div>
          <div className={`box-1-eco  ${display4} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcoList;

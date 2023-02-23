import React, { useState } from "react";
import One from "../../Assets/Eco/one.png";
import Play from "../../Assets/Eco/play.png";
import Nft from "../../Assets/Eco/nft.png";
import Nft2 from "../../Assets/Eco/nft2.png";
import last from "../../Assets/Eco/last.png";

function EcoList() {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
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

          <div className="eco-box" data-aos="fade-up" data-aos-duration="1000">
            <div className="eco-icon-box">
              <img src={Play} alt="" />
            </div>
            <p>NSFW Video Generator</p>
          </div>
          <div className={`box-2-eco  ${display} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>
          <div className="eco-box" data-aos="fade-up" data-aos-duration="2000">
            <div className="eco-icon-box">
              <img src={Nft} alt="" />
            </div>
            <p>One Click NFT Minter</p>
          </div>

          <div className={`box-3-eco  ${display} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>

          <div className="eco-box" data-aos="fade-up" data-aos-duration="2000">
            <div className="eco-icon-box">
              <img src={Nft2} alt="" />
            </div>
            <p>NFT Marketplace</p>
          </div>

          <div className={`box-4-eco  ${display} `}>
            <p>
              NSFW Image generator is where you can start building your NSFW
              dreams, we will have both webapp as well as telegram bot to
              generate NSFW images.
            </p>
          </div>

          <div className="eco-box" data-aos="fade-up" data-aos-duration="3000">
            <div className="eco-icon-box">
              <img src={last} alt="" />
            </div>
            <p>Governance Dao</p>
          </div>
          <div className={`box-5-eco  ${display} `}>
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

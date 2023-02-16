import React from "react";
import One from "../../Assets/Eco/one.png";
import Play from "../../Assets/Eco/play.png";
import Nft from "../../Assets/Eco/nft.png";
import Nft2 from "../../Assets/Eco/nft2.png";
import last from "../../Assets/Eco/last.png";

function EcoList() {
  return (
    <section className="eco-list">
      <div className="container">
        <div className="eco-list-grid">
          <div className="eco-box">
            <div className="eco-icon-box">
              <img src={One} alt="" />
            </div>
            <p>NSFW Image Generator</p>
          </div>

          <div className="eco-box">
            <div className="eco-icon-box">
              <img src={Play} alt="" />
            </div>
            <p>NSFW Video Generator</p>
          </div>

          <div className="eco-box">
            <div className="eco-icon-box">
              <img src={Nft} alt="" />
            </div>
            <p>One Click NFT Minter</p>
          </div>

          <div className="eco-box">
            <div className="eco-icon-box">
              <img src={Nft2} alt="" />
            </div>
            <p>NFT Marketplace</p>
          </div>

          <div className="eco-box">
            <div className="eco-icon-box">
              <img src={last} alt="" />
            </div>
            <p>Governance Dao</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcoList;

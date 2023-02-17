import React from "react";
import TokenImg from "../../Assets/token.png";
import MobTokenImg from "../../Assets/mob-token.png";
import './token.css'
import LightImg from '../../Assets/elements/light-line.svg'
function Tokenomic() {
  return (
    <>
      <section className="toko_system">
        <div className="container">
          <div className="header-text text-center">
            <h2>Tokenomics</h2>
            <hr className="low-hr" />
          </div>

          <div className="">
          <div className="token_details">
            <p className="cold">Cold Storage 10%</p>
            <p className="stake">Staking 20%</p>
            <p className="dex">Dex Liquidity 20%</p>
          </div>
          <div className="token text-center">
            <img src={TokenImg} alt=""  className="pc-tok"/>
            <img src={MobTokenImg} alt="" className="mob-tok"/>
            
          </div>

          <div className="token_details">
            <p className="team-1">Team Vesting 5%</p>
            <p className="stake-1">Staking 20%</p>
            <p className="exchange">Exchange Listings 15%</p>
          </div>



          </div>
         
        </div>
        <div className="container">
        <div className="token-box-grid ">
        
          <div className="token-box">
          <img src={LightImg} alt="" className='light-icon2'/>
            <div>
              <h1>5% Buy Text</h1>

              <p>4% - Marketing and Development of Ecosystem</p>
              <p>1% - Automatically Added to Dex LP</p>
            </div>
          </div>

          <div className="token-box">
          <img src={LightImg} alt="" className='light-icon2'/>
            <div>
              <h1>5% Sell Tax</h1>

              <p>4% - Marketing and Development of Ecosystem</p>
              <p>1% - Automatically Added to Dex LP</p>
            </div>
          </div>
        </div>
        </div>

     
      </section>
    </>
  );
}

export default Tokenomic;

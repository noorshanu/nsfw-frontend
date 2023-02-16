import React from "react";
import TokenImg from "../../Assets/token.png";
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
          <div className="token text-center">
            <img src={TokenImg} alt="" />
          </div>
        </div>
        <div className="container">
        <div className="token-box-grid ">
        
          <div className="token-box">
          <img src={LightImg} alt="" className='light-icon'/>
            <div>
              <h1>5% Buy Text</h1>

              <p>4% - Marketing and Development of Ecosystem</p>
              <p>1% - Automatically Added to Dex LP</p>
            </div>
          </div>

          <div className="token-box">
          <img src={LightImg} alt="" className='light-icon'/>
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

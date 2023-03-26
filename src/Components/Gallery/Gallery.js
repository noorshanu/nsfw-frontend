import React from "react";
import './Gal.css'
import GalSwipe1 from "./GalSwipe1";
import GalSwipe2 from "./GalSwipe2";
import BgBack from '../../Assets/elements/black.png'
import MobGallery from "./MobGallery";

function Gallery() {
  return (
    <section className="gallery">
       <br id="gallery"/>
      <img src={BgBack} alt="" className="black-ele"/>
      <div className="container align-items-center text-center pc-g" data-aos="zoom-in-up"  data-aos-duration="2000">
        <div className="header-text text-center">
          <h2>Gallery</h2>
          <hr className="low-hr" />
        </div>

        <div className="gal-btn-wrap">
            <a href="/" className="gal-btn">Anime</a>
            <a href="/" className="gal-btn">SOFT NSFW</a>
            <a href="/" className="gal-btn">HARD NSFW</a>


        </div>
        <div className="gal-btn-wrap2">
            <a href="/" className="gal-btn">CELEBRITY NSFW</a>
            <a href="/" className="gal-btn">MALE NSFW</a>
            <a href="/" className="gal-btn">FUNNY NSFW</a>
            

        </div>
      </div>


      <div className="container align-items-center text-center pc-m" data-aos="zoom-in-up"  data-aos-duration="2000">
        <div className="header-text text-center">
          <h2>Gallery</h2>
          <hr className="low-hr" />
        </div>

        <div className="btn-grid">
            <a href="/" className="gal-btn">Anime</a>
            <a href="/" className="gal-btn">SOFT NSFW</a>
            <a href="/" className="gal-btn">HARD NSFW</a>


        
            <a href="/" className="gal-btn">CELEBRITY NSFW</a>
            <a href="/" className="gal-btn">MALE NSFW</a>
            <a href="/" className="gal-btn">FUNNY NSFW</a>
            

        </div>
      </div>
      <MobGallery/>
      <GalSwipe1/>

      <GalSwipe2/>
    </section>
  );
}

export default Gallery;

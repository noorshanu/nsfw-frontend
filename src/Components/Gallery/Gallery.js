import React from "react";
import './Gal.css'

function Gallery() {
  return (
    <section className="gallery">
      <div className="container align-items-center text-center">
        <div className="header-text text-center">
          <h2>Gallery</h2>
          <hr className="low-hr" />
        </div>

        <div className="gal-btn-wrap">
            <a href="/" className="gal-btn">Anime</a>
            <a href="/" className="gal-btn">SOFT NSFW</a>
            <a href="/" className="gal-btn">HARD NSFW</a>


        </div>
        <div className="gal-btn-wrap">
            <a href="/" className="gal-btn">CELEBRITY NSFW</a>
            <a href="/" className="gal-btn">MALE NSFW</a>
            <a href="/" className="gal-btn">FUNNY NSFW</a>
            

        </div>
      </div>
    </section>
  );
}

export default Gallery;

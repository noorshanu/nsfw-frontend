import React from 'react'
import Nft1 from "../../Assets/Gallery/gal9.jpg";
import Nft2 from "../../Assets/Gallery/gal10.jpg";
import Nft4 from "../../Assets/Gallery/gal11.jpg";
import Nft5 from "../../Assets/Gallery/gal12.jpg";


function MobGallery() {
  return (
    <section className='mob-gal-1'>

        <div className='container'>
            <div className='gal-img text-center'>
            <img src={Nft1} alt="" />
            <img src={Nft2} alt="" />
            <img src={Nft4} alt="" />
            <img src={Nft5} alt="" />
            </div>

        </div>
    </section>
  )
}

export default MobGallery
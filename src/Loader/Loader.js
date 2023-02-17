import React from 'react'
import LoaderBg from '../Assets/loader.mp4'
import Lottie from 'react-lottie';
import animationData from './loader.json';
function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>

        <div className='overlay'>

        </div>

 <video
       playsInline
       loop
       autoPlay
       muted
        src={LoaderBg}
           
      />      

      <div className='content'>
        <div className='spiner' style={{marginTop:'20%'}}>
        <Lottie 
	    options={defaultOptions}
        height={100}
        width={100}
      />
        </div>
   
        </div> 
</div>
  )
}

export default Loader
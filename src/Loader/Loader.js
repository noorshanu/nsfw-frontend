import React from 'react'
import LoaderBg from '../Assets/loader.mp4'
function Loader() {
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
</div>
  )
}

export default Loader
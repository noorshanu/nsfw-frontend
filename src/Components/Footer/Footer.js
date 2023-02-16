import React from 'react'
import FootLogo from '../../Assets/logo-main.svg'
import './footer.css'
import Footleft from '../../Assets/elements/footcorner.svg'
import FtBt from '../../Assets/elements/ftbottom.svg'
import LightImg from '../../Assets/elements/light-line.svg'
function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='foot-main'>
            <div  className='container'>
                <div className='foot-grid'>
                    <div className='footer-logo'>
                        <img src={FootLogo} alt=""/>

                    </div>

                    <div className='foot-social'>
                        <ul>
                            <li></li>
                        </ul>

                    </div>

                </div>



            </div>

        </div>
        <div className='copy-right'>
            <p>Copyright© All rights and reserved NSFW 2023</p>

        </div>
    </footer>
    <img src={LightImg} alt="" className='light-icon'/>
    <img src={Footleft} alt="" className='left-con'/>
    <img src={FtBt} alt="" className='left-center'/>
  </>
  )
}

export default Footer
import React from 'react'
import FootLogo from '../../Assets/logo-main.svg'
function Footer() {
  return (
    <>
    <footer>
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
    </footer>
  </>
  )
}

export default Footer
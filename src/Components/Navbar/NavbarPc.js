import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";
import {MdOutlinePhotoFilter,MdAddChart} from 'react-icons/md'
import './Navbar.css'
import Logo from '../../Assets/logo-main.svg'
function NavbarPc() {
  return (
    <div className="pc-menu">
<div className="nav-logo">
    <img src={Logo} alt=""/>
</div>
<div className="float-nav">
      <div className="nav-box">
        <ul>
          <li>
            <a href="/"><RiHomeSmile2Line /></a>
            
          </li>
          <li>
            <a href="/"> <CiGlobe /></a>
           
          </li>
          <li>
            <a href="/">  <MdAddChart/></a>
          
          </li>
          <li>
            <a href="/"><TbRoad /></a>
            
          </li>
          <li>
            <a href="/"><MdOutlinePhotoFilter/></a>
          </li>
        </ul>
      </div>
    </div>
    </div>

  );
}

export default NavbarPc;

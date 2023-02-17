import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";
import { MdOutlinePhotoFilter, MdAddChart } from "react-icons/md";
import Logo from "../../Assets/logo-main.svg";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function MobNavbar() {
  return (
    <div className="mob-menu">
      <nav className="mob-nav">
        <div className="mnav-logo">
          <img src={Logo} alt="" />
        </div>
        <a href="/" className="menubar">
          <RiBarChartHorizontalLine />
        </a>
      </nav>
      <div className="float-nav">
        <div className="nav-box">
          <ul>
            <li>
              <RiHomeSmile2Line />
            </li>
            <li>
              <CiGlobe />
            </li>
            <li>
              <MdAddChart />
            </li>
            <li>
              <TbRoad />
            </li>
            <li>
              <MdOutlinePhotoFilter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobNavbar;

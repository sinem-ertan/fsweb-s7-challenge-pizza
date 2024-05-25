import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="logo-wrapper">
        <img src="../../Assets/mile1-assets/logo.svg" alt="logo" />
      </div>
      <div className="mini-slogan">fırsatı kaçırma</div>
      <div className="slogan">KOD ACIKTIRIR PIZZA, DOYURUR</div>
      <Link to="/order" className="banner-cta">
        ACIKTIM
      </Link>
    </div>
  );
}

export default Banner;

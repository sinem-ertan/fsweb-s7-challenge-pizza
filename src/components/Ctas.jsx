import React from "react";
import { Link } from "react-router-dom";
import "./Ctas.css";

function Ctas() {
  return (
    <div className="ctas-wrapper">
      <div className="ctas">
        <div className="cta-1">
          <div className="cta-title">Ozel Lezzetus</div>
          <div className="cta-caption">Position: Absolute Aci Burger</div>
          <Link to="/order" className="cta-button">
            SIPARIS VER
          </Link>
        </div>
        <div className="small-ctas-wrapper">
          <div className="cta-2">
            <div className="cta-title">Hackathlon Burger Menu</div>
            <Link to="/order" className="cta-button">
              SIPARIS VER
            </Link>
          </div>
          <div className="cta-3">
            <div className="cta-title">Coooook hizli npm gibi kurye</div>
            <Link to="/order" className="cta-button">
              SIPARIS VER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ctas;

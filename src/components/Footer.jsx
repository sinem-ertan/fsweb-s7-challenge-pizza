import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-wrapper">
            <div className="footer-content">
              <div className="section-1">
                <div className="footer-logo">
                  <img
                    src="../../Assets/mile2-aseets/footer/logo-footer.svg"
                    alt="footer-logo"
                  />
                </div>
                <ul>
                  <li>
                    <img src="../../Assets/mile2-aseets/footer/icons/icon-1.png" />
                    <span>341 Londonderry Road, Istanbul Türkiye</span>
                  </li>
                  <li>
                    <img src="../../Assets/mile2-aseets/footer/icons/icon-2.png" />
                    <span>aciktim@teknolojikyemekler.com</span>
                  </li>
                  <li>
                    <img src="../../Assets/mile2-aseets/footer/icons/icon-3.png" />
                    <span>+90 216 123 45 67</span>
                  </li>
                </ul>
              </div>
              <div className="section-2">
                <div className="section-2-title">Sıccacık Menuler</div>
                <ul>
                  <li>Terminal Pizza</li>
                  <li>5 Kişilik Hackathlon Pizza</li>
                  <li>useEffect Tavuklu Pizza</li>
                  <li>Beyaz Console Frosty</li>
                  <li>Testler Geçti Mutlu Burger</li>
                  <li>Position Absolute Acı Burger</li>
                </ul>
              </div>
            </div>
            <div className="footer-instagram">
              <div className="footer-instagram-title">Instagram</div>
              <div className="footer-instagram-images">
                {Array.from(Array(6)).map((_, index) => (
                  <img
                    key={index}
                    className="footer-instagram-image"
                    src={`../../Assets/mile2-aseets/footer/insta/li-${index}.png`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-copyright">
            © 2023 Teknolojik Yemekler.
          </div>
          <div className="footer-bottom-twitter">
            <img src="../../Assets/mile2-aseets/footer/twitter.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

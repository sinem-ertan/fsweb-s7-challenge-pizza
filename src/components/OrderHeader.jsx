import React from "react";
import "./OrderHeader.css";

function OrderHeader() {
  return (
    <div className="order-header">
      <div className="red-header">
        <img src="../../Assets/mile1-assets/logo.svg" />
      </div>
      <div className="form-banner">
        <img src="../../Assets/mile2-aseets/pictures/form-banner.png" />
      </div>
      <div className="breadcrumb">
        <ul>
          <li>Anasayfa</li>
          <li>Secenekler</li>
          <li className="last">Siparis Olustur</li>
        </ul>
      </div>
      <div className="order-content">
        <div className="order-content-wrapper">
          <div className="order-title">Position Absolute Acı Pizza</div>
          <div className="order-info">
            <div className="order-price">85.50₺</div>
            <div className="order-score">4.9</div>
            <div className="order-score">(200)</div>
          </div>
          <p className="order-text">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;

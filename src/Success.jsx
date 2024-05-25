import React from "react";
import "./Success.css";
import "./components/Banner.css";
import "./components/OrderSelections.css";

function Success({ extras, cost, selections }) {
  return (
    <div className="success-page">
      <div className="success-content">
        <div className="success-logo">
          <img src="../../Assets/mile1-assets/logo.svg" />
        </div>
        <div className="mini-slogan">lezzetin yolda</div>
        <div className="slogan">SİPARİŞ ALINDI</div>
        <hr style={{ width: "100%" }} />
        <div className="pizza-name">Position Absolute Acı Pizza</div>
        <div className="pizza-specs">
          <div className="specs">
            Boyut: <b>{selections.size}</b>
          </div>
          <div className="specs">
            Hamur: <b>{selections.paste}</b>
          </div>
          <div className="specs">
            Ek Malzemeler:{" "}
            <b>
              {selections.extras
                .reduce((acc, extra, index) => {
                  if (extra) {
                    return [...acc, extras[index]];
                  }

                  return acc;
                }, [])
                .join(", ")}
            </b>
          </div>
        </div>
        <div className="success-total">
          <div className="selection-title">Sipariş Toplamı</div>
          <div className="selections-total">
            <div className="label">Secimler</div>
            <div className="price">{cost.extras.toFixed(2)}₺</div>
          </div>
          <div className="selections-total">
            <div className="label">Toplam</div>
            <div className="price">{cost.total.toFixed(2)}₺</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;

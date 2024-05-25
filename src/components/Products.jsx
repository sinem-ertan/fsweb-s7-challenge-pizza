import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const products = [
  {
    name: "Terminal Pizza",
    score: "4.9",
    reviewCount: 200,
    price: 60,
  },
  {
    name: "Position Absolute Aci Pizza",
    score: "4.9",
    reviewCount: 989,
    price: 85,
  },
  {
    name: "useEffect Tavuklu Burger",
    score: "4.9",
    reviewCount: 462,
    price: 75,
  },
];

function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-wrapper" id="products">
      <div className="products">
        {products.map((product, index) => (
          <div
            className="product"
            key={index}
            onClick={() => navigate("/order")}
          >
            <div className="product-image">
              <img
                src={`../../Assets/mile2-aseets/pictures/food-${index + 1}.png`}
              />
            </div>
            <div className="product-footer">
              <div className="product-name">{product.name}</div>
              <div className="product-content">
                <div className="product-score">{product.score}</div>
                <div className="product-review-count">
                  {`(${product.reviewCount})`}
                </div>
                <div className="product-price">{`${product.price}₺`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

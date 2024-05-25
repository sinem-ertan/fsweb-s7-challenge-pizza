import React from "react";
import "./Categories.css";

function Categories({ categories }) {
  return (
    <nav className="categories-wrapper">
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="category">
              <img
                src={`../../Assets/mile2-aseets/icons/${index + 1}.svg`}
                alt={`category ${index + 1}`}
              />
              <span className="category-name">{category}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;

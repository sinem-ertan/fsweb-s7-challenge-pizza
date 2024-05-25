import React from "react";
import "./Categories2.css";

function Categories2({ categories }) {
  return (
    <nav className="categories2-wrapper">
      <ul className="categories2">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="category2">
              <img
                src={`../../Assets/mile2-aseets/icons/${index + 1}.svg`}
                alt={`category ${index + 1}`}
              />
              <span className="category2-name">{category}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories2;

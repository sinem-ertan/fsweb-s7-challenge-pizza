import React from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Categories2 from "./components/Categories2";
import Ctas from "./components/Ctas";
import Products from "./components/Products";
import "./Home.css";

const categories = [
  "YENI! Kore",
  "Pizza",
  "Burger",
  "Kizartmalar",
  "Fast Food",
  "Gazli Icecek",
];

function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories categories={categories} />
      <Ctas />
      <div className="list-title-1">en cok paketlenen menuler</div>
      <div className="list-title-2">Aciktiran Kodlara Doyuran Lezzetler</div>
      <Categories2 categories={categories} />
      <Products />
    </div>
  );
}

export default Home;

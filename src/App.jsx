import React, { useEffect, useState } from "react";
import Home from "./Home";
import OrderPage from "./OrderPage";
import Success from "./Success";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

const extras = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];

const prices = {
  pizza: 85,
  extra: 5,
};

function App() {
  const { pathname } = useLocation();
  const [cost, setCost] = useState({
    extras: 0,
    total: prices.pizza,
  });

  const [selections, setSelections] = useState({
    extras: new Array(extras.length).fill(false),
    count: 1,
  });

  useEffect(() => {
    const selecteds = selections.extras.filter((extra) => extra);
    const extrasCost = selecteds.length * prices.extra;

    setCost({
      extras: extrasCost,
      total: extrasCost + prices.pizza * selections.count,
    });
  }, [selections]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="order"
          element={
            <OrderPage
              extras={extras}
              cost={cost}
              selections={selections}
              setSelections={setSelections}
            />
          }
        />
        <Route
          path="success"
          element={
            <Success extras={extras} cost={cost} selections={selections} />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

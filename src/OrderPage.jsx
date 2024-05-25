import React from "react";
import OrderHeader from "./components/OrderHeader";
import OrderSelections from "./components/OrderSelections";
import "./OrderPage.css";

function OrderPage({ extras, cost, selections, setSelections }) {
  return (
    <div className="order-page">
      <OrderHeader />
      <OrderSelections
        extras={extras}
        cost={cost}
        selections={selections}
        setSelections={setSelections}
      />
    </div>
  );
}

export default OrderPage;

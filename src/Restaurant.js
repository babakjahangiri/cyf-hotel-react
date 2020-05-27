import React, { useState } from "react";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  // const addOrder = () => {
  //   setOrders(orders + 1);
  // };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <button
            onClick={() => setOrders(orders + 1)}
            className="btn btn-primary"
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

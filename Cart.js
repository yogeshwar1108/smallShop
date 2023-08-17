import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      Cart
      <h1>item in cart are to be displayed</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="border border-dark bordeer-2 m-1">
              <img src={item.image} alt="oikn" style={{ width: 100 }} />
              <h5>{item.title}</h5>
              <h3>{item.price}</h3>
              <button className="btn btn-danger mb-1 ">remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

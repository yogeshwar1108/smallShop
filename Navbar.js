import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const cartcount=useSelector((state)=>state.cart)
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="d-flex justify-content-end d-md-inline-flex">
           
          <li className="nav-item m-1">
            <Link className="nav-link active text text-light " to="/">
              PRODUCT
            </Link>
            </li>
            <li className="nav-item m-1 ">
            <Link className="nav-link active text text-light " to="cart">
              Cart     
              <span>{cartcount.length}</span>
            </Link>
          </li>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Navbar;

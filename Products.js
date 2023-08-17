import React, { useEffect, useState } from "react";
import axios from "axios";
import { addItem } from "./Redux/cartSlice";
import { useDispatch } from "react-redux";

function Products() {
  const [products, setProducts] = useState([]);
  const dispach = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data)) // Set the data property of the response
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    dispach(addItem(product));
  };

  return (
    <div>
      <h1>ITEMS</h1>
      <ul className="d-flex  flex-wrap justify-content-center">
        {products.length > 0 &&
          products.map((product) => (
            <div className=" container col-md-5 border border-dark m-1">
              <center>
                <li key={product.id}>
                  <img src={product.image} alt="oikn" style={{ width: 100 }} />
                  <h5>{product.title}</h5>
                  <h3>{product.price}</h3>
                  <button
                    className="btn btn-warning mb-1 "
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </li>
              </center>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Products;

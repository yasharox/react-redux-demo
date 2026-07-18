import React, { useEffect, useReducer, useState } from "react";
import Products from "./Products";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
}

// step-2
// action - defines what has happened.
// reducer - simply update the state basis the action recieved and return new state
function httpReducer(state, action) {
  if (action.type === "PENDING") {
    return {
      products: [],
      isLoading: true,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      products: action.payload,
      isLoading: false,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      products: [],
      isLoading: false,
      error: action.error,
    };
  }

  throw new Error("Invalid Action Type"); // if non of the condition matches then throw this error
}

export default function ProductListOptimised() {
  // step-1 create reducer
  const [productsState, dispatch] = useReducer(httpReducer, {
    products: [],
    isLoading: true,
    error: null,
  });

  // step-3 integrate dispatch here
  useEffect(() => {
    async function makeApiCall() {
      try {
        dispatch({ type: "PENDING" });
        const data = await fetchProducts();
        dispatch({ type: "SUCCESS", payload: data.products }); // promise will be resolved with data
      } catch (err) {
        dispatch({ type: "ERROR", error: err.message });
      }
    }
    makeApiCall();
  }, []);

  return (
    <div>
      {productsState.isLoading && <h4> Loading Products</h4>}
      {productsState.error && <p> {productsState.error}</p>}
      {!productsState.error && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {productsState.products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

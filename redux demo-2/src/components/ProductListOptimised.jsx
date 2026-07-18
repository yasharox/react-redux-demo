import React, { useEffect, useState } from "react";
import Products from "../../../redux-demo/src/components/Products";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
}

export default function ProductListOptimised() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function makeApiCall() {
      try {
        const data = await fetchProducts();
        setProducts(data.products); // promise will be resolved with data
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(true);
      }
    }
    makeApiCall();
  }, []);

  return (
    <div>
      {isLoading && <h4> Loading Products</h4>}
      {error && <p> {error}</p>}
      {!error && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

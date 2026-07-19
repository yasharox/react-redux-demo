import React, { useEffect } from "react";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";

export default function ProductListOptimised() {
  const productsState = useSelector((store) => store.productState);
  console.log(productsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(10));
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

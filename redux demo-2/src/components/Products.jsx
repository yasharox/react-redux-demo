import React from "react";

export default function Products({ product }) {
  return (
    <figure
      style={{ border: "2px solid black", width: "200px", padding: "5px" }}
    >
      <img width={150} src={product.images[0]} />
      <figcaption>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
      </figcaption>
    </figure>
  );
}

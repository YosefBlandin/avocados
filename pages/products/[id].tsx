import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState<any>({});
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setProduct(response);
        });
    }
  }, [id]);

  return (
    <div>
      <h1>Product ID: {product.id}</h1>
      <h1>Product Name: {product.name}</h1>
      <h1>Product Image URL: {product.image}</h1>
    </div>
  );
};

export default Product;

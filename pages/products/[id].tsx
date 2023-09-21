import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { TProduct } from "utils/types";
import DB from "@database";

export const getStaticPaths = async () => {
  const Database = new DB();
  const response = await Database.getAll();

  const paths = response.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const Database = new DB();
  const response = await Database.getById(id);

  return {
    props: {
      product: response,
    },
  };
};

const Product: FC<{ product: TProduct }> = ({ product }) => {
  return (
    <section className="container">
      <section className="d-flex align-items-center">
        <img src={product.image} alt={product.name} />

        <section>
          <h2 className="fs-3">
            <strong>Name:</strong> {product.name}
          </h2>
          <p className="fs-5">
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className="fs-5">
            <strong>Taste:</strong> {product.attributes.taste}
          </p>
          <p className="fs-5">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="fs-5">
            <strong>Shape:</strong> {product.attributes.shape}
          </p>
          <p className="fs-5">
            <strong>Hardiness:</strong> {product.attributes.hardiness}
          </p>
        </section>
      </section>
    </section>
  );
};

export default Product;

import React, { FC, ReactElement, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ProductCard from "@components/ProductCard";

const AVO_LIST_URL = "/api/avo";

const Home: FC = () => {
  const [productList, setProductList] = useState<[]>([]);

  useEffect(() => {
    window
      .fetch(AVO_LIST_URL)
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Home | Avocados E-commerce</title>
      </Head>
      <div>
        <h1 className="text-center my-5">Avocados E-commerce</h1>
        <section className="container d-flex flex-wrap gap-3 justify-content-center">
          {productList.map(
            (product: any): ReactElement => (
              <ProductCard product={product} />
            )
          )}
        </section>
      </div>
    </>
  );
};

export default Home;

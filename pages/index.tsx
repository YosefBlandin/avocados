import React, { FC, ReactElement } from "react";
import Head from "next/head";
import ProductCard from "@components/ProductCard";
import DB from "@database";
import { GetStaticProps } from "next";
import { TProduct, TProductListProps } from "utils/types";

export const getStaticProps: GetStaticProps = async () => {
  const Database = new DB();
  const response = await Database.getAll();

  return {
    props: {
      productList: response,
    },
  };
};

type THome = {
  productList: TProduct[];
};

const Home: FC<THome> = ({ productList }) => {
  return (
    <>
      <Head>
        <title>Home | Avocados E-commerce</title>
      </Head>
      <div>
        <h1 className="text-center my-5">Avocados E-commerce</h1>
        <section className="container d-flex flex-wrap gap-3 justify-content-center">
          {productList.map(
            (product: TProduct): ReactElement => (
              <ProductCard product={product} key={product.id} />
            )
          )}
        </section>
      </div>
    </>
  );
};

export default Home;

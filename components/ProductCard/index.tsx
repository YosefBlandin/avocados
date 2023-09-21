import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { TProduct } from "utils/types";

type TProductCard = {
  product: TProduct;
};

const ProductCard: FC<TProductCard> = ({ product }) => {
  return (
    <article className="card" style={{ width: 350, height: 550 }}>
      <picture className="relative" style={{ maxWidth: 300 }}>
        <Image
          src={product.image}
          alt={"Avocado " + product.name}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
      <section className="card-body d-grid">
        <div>
          <p className="fw-bold fs-4 mb-0">{product.name}</p>
          <p className="fs-5">{product.attributes.taste}</p>
          <small className="fw-bold fs-4">${product.price}</small>
        </div>
        <div className="d-flex justify-content-between align-self-end">
          <Link href={`products/${product.id}`} key={product.id}>
            <button className="btn btn-secondary">View details</button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;

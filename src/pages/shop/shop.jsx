import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="mt-2">
        <h1>Hello There!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((prod) => {
          return (
            <Product
              title={prod.productName}
              price={prod.price}
              image={prod.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;

import React from "react";
import ProductGallery from "./productGallery";

const Shop = () => {
  return (
    <div className="shop">
      <div className="mt-4">
        <h1>Hello There!</h1>
      </div>
      <div className="products">
        <ProductGallery />
      </div>
    </div>
  );
};

export default Shop;

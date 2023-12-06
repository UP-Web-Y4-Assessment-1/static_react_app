import React from "react";
import Sidebar from "./Sidebar";
import ProductMinimal from "./ProductMinimal";
import ProductFeature from "./ProductFeature";
import ProductGrid from "./ProductGrid";

const Product = () => {
  return (
    <div class="product-container">
      <div class="container">
        <Sidebar />
        <div class="product-box">
          <ProductMinimal />
          <ProductFeature/>
          <ProductGrid/>
        </div>
      </div>
    </div>
  );
};

export default Product;

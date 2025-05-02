import React from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="border-1 border-black w-60 ">
      <img src={image} alt="product-image" className="h-40" />
      <label className="ml-3">{title}</label>
    </div>
  );
};

export default ProductCard;

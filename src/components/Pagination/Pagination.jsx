import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?&limit=150");
    const jsonData = await data.json();
    setProduct(jsonData?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Pagination !!!</h1>
      <div className="flex flex-wrap gap-3">
        {product.map((item) => (
          <ProductCard key={item.id} image={item.images} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?&limit=150");
      const jsonData = await data.json();
      setProduct(jsonData?.products);
    } catch (err) {
      console.log("Somthing went wrong", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < noOfPages - 1) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Pagination !!!</h1>
      <div className="text-center my-2">
        <button className="cursor-pointer " onClick={handlePrevPage}>
          ◀️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`px-3 mx-1 cursor-pointer border-1 border-black ${
              n === currentPage ? "bg-green-400" : ""
            } `}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button className="cursor-pointer" onClick={handleNextPage}>
          ▶️
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {product.slice(start, end).map((item) => (
          <ProductCard key={item.id} image={item.images} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;

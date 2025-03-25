import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  
  useEffect(() => {
    if (products.length > 0) {
      const bestProduct = products.filter((item) => item.bestSeller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);
  
  return (
    <div className="my-10 px-4 sm:px-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-full max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          Discover our top-selling products, handpicked by our customers. Enjoy quality and best prices on these favorites.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No bestsellers available</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;

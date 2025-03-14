import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-12 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-full md:w-2/3 mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
          Discover our latest collection of stylish and high-quality products, crafted to elevate your lifestyle.
        </p>
      </div>

      {/* Product Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {latestProducts.map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestCollection;

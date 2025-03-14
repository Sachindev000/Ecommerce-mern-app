import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOrder, setSortOrder] = useState("relavent");

  useEffect(() => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  }, [category, subCategory, products, search, showSearch]);

  useEffect(() => {
    let sortedProducts = [...filteredProducts];
    if (sortOrder === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  }, [sortOrder, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t px-4 sm:px-10">
      <div className="min-w-60">
        <p
          className="text-lg font-semibold flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER
          <img
            className={`h-4 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-180" : ""
            }`}
            src={assets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>

        <div className={`mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <div className="border rounded-lg p-4 bg-gray-100">
            <p className="mb-2 text-sm font-medium">Category</p>
            {['Men', 'Women', 'Kids'].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm font-light text-gray-700">
                <input
                  type="checkbox"
                  value={item}
                  checked={category.includes(item)}
                  onChange={(e) => setCategory((prev) => prev.includes(item) ? prev.filter(c => c !== item) : [...prev, item])}
                />
                {item}
              </label>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-100 mt-4">
            <p className="mb-2 text-sm font-medium">Type</p>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm font-light text-gray-700">
                <input
                  type="checkbox"
                  value={item}
                  checked={subCategory.includes(item)}
                  onChange={(e) => setSubCategory((prev) => prev.includes(item) ? prev.filter(sc => sc !== item) : [...prev, item])}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-lg sm:text-xl mb-6">
          <Title text1="ALL" text2="COLLECTION" />
          <select
            className="border rounded-lg px-2 py-1 text-sm bg-white shadow-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;

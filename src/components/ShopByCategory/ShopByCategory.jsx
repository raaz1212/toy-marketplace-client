import React, { useState } from "react";
import data from "./data.json";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="flex justify-center mb-6">
          {data.categories.map((category, index) => (
            <button
              key={index}
              className={`px-1 py-1 mx-1 sm:mx-4 font-normal text-xs sm:text-lg rounded-md ${
                activeTab === index
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.categories[activeTab].toys.map((toy, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-96" src={toy.imageUrl} alt={toy.name} />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {toy.name}
                </h3>
                <p className="text-gray-600 mb-2">{toy.price}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-1">&#9733;</span>
                  <span className="text-gray-600">{toy.rating}</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

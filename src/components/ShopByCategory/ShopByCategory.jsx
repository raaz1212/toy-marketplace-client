import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  if (!toys || toys.length === 0) {
    return null; // or you can return a loading indicator or an appropriate message
  }

  // Extract unique categories from toys array
  const uniqueCategories = [...new Set(toys.map((toy) => toy.subCategory))];

  const filteredToys = toys.filter(
    (toy) => toy.subCategory === uniqueCategories[activeTab]
  );

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <TabList className="flex justify-center mb-6">
            {uniqueCategories.map((subCategory, index) => (
              <Tab
                key={index}
                className={`px-1 sm:px-3 py-1 mx-1 sm:mx-2 font-normal text-xs uppercase sm:text-lg rounded-md ${
                  activeTab === index
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {subCategory}
              </Tab>
            ))}
          </TabList>
          {uniqueCategories.map((subCategory, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredToys
                  .filter((toy) => toy.subCategory === subCategory)
                  .map((toy, toyIndex) => (
                    <div
                      key={toyIndex}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        className="w-full h-96"
                        src={toy.photo}
                        alt={toy.name}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                          {toy.name}
                        </h3>
                        <p className="text-gray-600 mb-2">{toy.price}</p>
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-400 mr-1">&#9733;</span>
                          <span className="text-gray-600">{toy.rating}</span>
                        </div>
                        <Link
                          to="/toys-details"
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategory;

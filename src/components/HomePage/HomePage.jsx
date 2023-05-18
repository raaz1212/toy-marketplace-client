import React from "react";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import DiscountSection from "../DiscountSection/DiscountSection";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <DiscountSection />
      <GallerySection />
      <ShopByCategory />
      <CustomerReview />
    </div>
  );
};

export default HomePage;

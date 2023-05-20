import React from "react";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import DiscountSection from "../DiscountSection/DiscountSection";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SectionWithAOS from "../Welcome/Welcome";

const HomePage = () => {
  document.title = "DC Toys | Home";
  return (
    <div>
      <Banner />
      <DiscountSection />
      <GallerySection />
      <ShopByCategory />
      <CustomerReview />
      <SectionWithAOS />
    </div>
  );
};

export default HomePage;

import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import AffinityExperience from "../components/AffinityExperience";
import AffinitySecurity from "../components/AffinitySecurity";
import AffinityStory from "../components/AffinityStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <AffinityExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <AffinitySecurity />
      <AffinityStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;

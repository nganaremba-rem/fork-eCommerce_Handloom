import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

import raniphi from "../assets/Category/rani.png";
import pheichom from "../assets/Category/pheijom5.png";
import CarouselTraditional from "../components/Hero/CarouselTraditional";

import Productcomponents from "../components/Productscomponents/Productcomponents";
import PriceStores from "../components/Pricestores/PriceStores";
import TopSales from "../components/Topsales/TopSales";

const BannerData = {
  discount: "50% OFF",
  title: "Beauty",
  date: "1st July to 30th July",
  image: raniphi,
  title2: "Manipur Traditional",
  title3: "Attire Sales",
  title4: "Rani phi full most rare design ",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "50% OFF",
  title: "Beauty",
  date: "1st July to 23rd July",
  image: pheichom,
  title2: "Manipur Traditional",
  title3: "Suit Sales",
  title4: "Pheichom Kurta suit most rare design beauty",
  bgColor: "#2dcc6f",
};

const HomePage = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <CarouselTraditional />
        <Productcomponents />
        <TopSales />

        {/* <Category />
        <Category2 /> */}
        <PriceStores />
        <Banner data={BannerData} />
        <Products />

        <Banner data={BannerData2} />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

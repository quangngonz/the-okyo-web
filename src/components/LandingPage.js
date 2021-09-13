import React from "react";

import "./LandingPage.css";

import Banner from "./LandingPage/Body/Banner/Banner";
import MenuBar from "./LandingPage/MenuBar/MenuBar";
import Why from "./LandingPage/Body/Why/Why";
import Shop from "./LandingPage/Body/Shop/Shop";
import Footer from "./LandingPage/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <MenuBar />
      <Banner className="Banner" />
      <Why />
      <Shop />
      <Footer />
    </>
  );
};

export default LandingPage;

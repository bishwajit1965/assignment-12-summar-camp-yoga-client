import React from "react";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Slider from "../../components/slider/Slider";
import PopularClasses from "../../components/popularClasses/PopularClasses";
import PopularInstructor from "../../components/popularInstructor/PopularInstructor";
import Gallery from "../../components/gallery/Gallery";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Summer camp Yoga || Home</title>
      </Helmet>
      <Header />
      <Slider />
      <PopularClasses />
      <PopularInstructor />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;

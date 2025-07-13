import React from "react";
import Carousel from "../Components/Carousel";
import Category from "../Components/Category";
import Banner from "../Components/Banner";
import Features from "../Components/Features";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Category />
      <Banner />
      <Features />
    </div>
  );
}

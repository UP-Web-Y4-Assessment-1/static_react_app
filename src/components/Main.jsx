import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Product from "./Product";
import Testimonial from "./Testimonial";
import Cta from "./Cta";
import Service from "./Service";
import Blog from "./Blog";

const Main = () => {
  return (
    <>
      <Banner />
      <Category />
      <Product />
      <div>
        <div class="container">
          <div class="testimonials-box">
            <Testimonial/>
            <Cta/>
            <Service/>
          </div>
        </div>
      </div>
      <Blog/>
    </>
  );
};

export default Main;

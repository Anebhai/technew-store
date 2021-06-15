import React from "react";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";

const AboutPage = () => {
  return (
    <>
      <Hero img={aboutBcg}>
        <h1>hello from about page</h1>
      </Hero>
      <Info />
    </>
  );
};

export default AboutPage;

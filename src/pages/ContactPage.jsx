import React from "react";
import ContactBcg from "../images/contactBcg.jpeg";
import Hero from "../components/Hero";
import Contact from "../components/Contactpage/Contact";

const ContactPage = () => {
  return (
    <>
      <Hero img={ContactBcg} />
      <Contact />
    </>
  );
};

export default ContactPage;

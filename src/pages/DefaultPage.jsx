import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <defaultWrapper>
      <Hero title="404" max img={defaultBcg} className="text-title">
        <h1
          className="text-uppercase text-title"
          style={{ marginBottom: "2rem" }}
        >
          Page not found
        </h1>
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          Return home
        </Link>
      </Hero>
    </defaultWrapper>
  );
}

import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Hero title="awesome products" max>
      <Link to="/products" className="main-link">
        Our products
      </Link>
    </Hero>
  );
}

import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

const Features = () => (
  <section className="container">
    <div className="feature-cards-container">
      {features.map(item => (
        <FeatureCard key={item.id} item={item}/>
      ))}
    </div>
  </section>
);
export default Features;

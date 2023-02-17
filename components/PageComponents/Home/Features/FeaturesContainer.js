import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

const Features = () => (
  <section className="feature-cards-container">
    {features.map(item => (
      <FeatureCard key={item.id} item={item}/>
    ))}
  </section>
);

export default Features;

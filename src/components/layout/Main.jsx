import React from "react";
import { HeroCarousel } from "../sections/HeroCarousel";
import { LuxurySection } from "../sections/LuxurySection";
import { GoogleReviews } from "../sections/GoogleReviews";
import { FeaturedCars } from "../sections/FeaturedCards";
export const Main = () => {
  return (
    <>
      <HeroCarousel />
      <FeaturedCars />
      <LuxurySection />
      <GoogleReviews />
    </>
  );
};

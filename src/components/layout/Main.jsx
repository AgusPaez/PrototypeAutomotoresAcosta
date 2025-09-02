import React from "react";
import { HeroCarousel } from "../sections/HeroCarousel";
import { LuxurySection } from "../sections/LuxurySection";
import { GoogleReviews } from "../sections/GoogleReviews";
import { FeaturedCars } from "../sections/FeaturedCards";
import { SectionSeparator } from "../ui/SectionSeparator";
import { Services } from "../sections/Services";
export const Main = () => {
  return (
    <>
      <HeroCarousel />
      <FeaturedCars />
      <SectionSeparator />
      <LuxurySection />
      <SectionSeparator />
      <Services />
      <GoogleReviews />
      <SectionSeparator />
    </>
  );
};

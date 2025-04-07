import React from "react";
import Hero from "@/components/Hero";
import TarjetaSection from "@/sections/TarjetaSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

const Page = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col ">
      <Hero />
      {/* <TarjetaSection /> */}
      <TestimonialsSection />
    </div>
  );
};

export default Page;

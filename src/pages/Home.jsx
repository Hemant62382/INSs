import React from "react";
import Hero from "../component/home/Hero";
import Stats from "../component/home/Stats";
import Features from "../component/home/Features";
import Testimonials from "../component/home/Testimonials";
import Footer from "../coman/Footer";
import HeroSlide from "../component/home/HeroSlide";

export default function Home() {
  return (
    <>
      <HeroSlide />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
    </>
  );
}

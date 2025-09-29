import React from 'react';
import Hero from '../component/Hero';
import Stats from '../component/Stats';
import Features from '../component/Features';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';


export default function Home() {
  return (<>
      <Hero/>
      <Stats />
      <Features />
      <Testimonials />
    </>
  );
}

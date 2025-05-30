import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FormCard from '../components/FormCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="form-section">
        <FormCard />
      </div>
      <Footer />
    </>
  );
}

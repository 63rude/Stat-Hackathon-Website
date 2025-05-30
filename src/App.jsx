import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FormCard from './components/FormCard';

function App() {
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

export default App;

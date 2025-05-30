import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FormCard from './components/FormCard';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />
        <div id="form-section">
          <FormCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

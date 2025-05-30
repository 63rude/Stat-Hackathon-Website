import React from 'react';
import logo from '../assets/logo.png'; // adjust path if needed

function AboutUs() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
    },
    content: {
      maxWidth: '600px',
      lineHeight: '1.8',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src={logo} alt="Smart Gradients Logo" style={{ width: '120px', marginBottom: '1rem' }} />
        <h1>Smart Gradients 🎓</h1>
        <p>
          We are a team of five dedicated students driven by a passion for data science and its potential in healthcare. ❤️<br /><br />
          This project was developed during the Stat Hackathon 2025 🧪 to help predict the stage of Primary Biliary Cholangitis (PBC) using clinical data and AI.<br /><br />
          Our goal is to turn complex data into clear, helpful tools that support real-world decisions. 🚀📊
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

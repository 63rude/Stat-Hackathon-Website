import React from 'react';
import logo from '../assets/logo.png';

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
          We were a team of five students at Stat Hackathon 2025. We built this prototype to explore whether a trained model could classify PBC stage from the supplied example data.<br /><br />
          The site and model are preserved here as our hackathon work. They have not been validated for clinical use.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

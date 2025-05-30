import React from 'react';

function App() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to bottom right, #e0f7fa, #f1f8ff)',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      fontWeight: 600,
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
    },
    logo: {
      fontWeight: 'bold',
      color: '#007acc',
      fontSize: '1.2rem',
    },
    hero: {
      margin: '4rem auto 3rem auto',
      background: '#fff',
      padding: '2.5rem',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      maxWidth: '600px',
      width: '90%',
    },
    heroTitle: {
      fontSize: '2.2rem',
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      color: '#444',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '0.8rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    formCard: {
      background: '#fff',
      padding: '2.5rem',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.06)',
      maxWidth: '600px',
      margin: '2rem auto',
      width: '90%',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    footer: {
      backgroundColor: '#f5f5f5',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>PBC Tool</div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>How It Works</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>🧪 PBC Stage Predictor</h1>
          <p style={styles.heroSubtitle}>Insert clinical data to predict disease stage</p>
          <button
            style={styles.button}
            onClick={() =>
              document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start Prediction
          </button>
        </section>

        <div id="form-section" style={styles.formCard}>
          Enter Patient Data
        </div>
      </main>

      <footer style={styles.footer}>
        <div>Made with ❤️ at Stat Hackathon 2025</div>
        <div>© 2025 PBC Stage Predictor. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;

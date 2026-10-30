import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import logo from './assets/logo1.png';

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || '';

const categoricalOptions = {
  Sex: ['F', 'M'],
  Ascites: ['N', 'Y'],
  Hepatomegaly: ['N', 'Y'],
  Spiders: ['N', 'Y'],
  Edema: ['N', 'S', 'Y'],
};


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
      marginRight: '1rem',
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
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      marginTop: '0.25rem',
      marginBottom: '1rem',
      fontWeight: 500,
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
    resultBlock: {
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#e0f7fa',
      borderRadius: '8px',
      textAlign: 'left',
    }
  };

const fieldUnits = {
  Age: 'years',
  Sex: '',
  Ascites: '',
  Hepatomegaly: '',
  Spiders: '',
  Edema: '',
  Bilirubin: 'mg/dL',
  Cholesterol: 'mg/dL',
  Albumin: 'g/dL',
  Copper: 'µg/dL',
  Alk_Phos: 'IU/L',
  SGOT: 'IU/L',
  Tryglicerides: 'mg/dL',
  Platelets: '×10⁹/L',
  Prothrombin: 'seconds',
};

  const [form, setForm] = React.useState({
    Age: 50,
    Sex: 'F',
    Ascites: 'N',
    Hepatomegaly: 'N',
    Spiders: 'N',
    Edema: 'N',
    Bilirubin: 1.0,
    Cholesterol: 200,
    Albumin: 3.5,
    Copper: 100,
    Alk_Phos: 150,
    SGOT: 60,
    Tryglicerides: 180,
    Platelets: 250,
    Prothrombin: 11.0,
  });

  const [result, setResult] = React.useState(null);

  const generateRandomData = () => {
    const SGOT = Math.floor(Math.random() * 120) + 20;
    const Alk_Phos = Math.floor(Math.random() * 200) + 100;
    const Bilirubin = +(Math.random() * 3 + 0.5).toFixed(2);
    
    setForm({
      Age: Math.floor(Math.random() * 50) + 30,
      Sex: Math.random() < 0.5 ? 'F' : 'M',
      Ascites: Math.random() < 0.5 ? 'N' : 'Y',
      Hepatomegaly: Math.random() < 0.5 ? 'N' : 'Y',
      Spiders: Math.random() < 0.5 ? 'N' : 'Y',
      Edema: ['N', 'S', 'Y'][Math.floor(Math.random() * 3)],
      Bilirubin,
      Cholesterol: Math.floor(Math.random() * 200) + 100,
      Albumin: +(Math.random() * 3 + 2.5).toFixed(2),
      Copper: Math.floor(Math.random() * 150) + 50,
      Alk_Phos,
      SGOT,
      Tryglicerides: Math.floor(Math.random() * 250) + 100,
      Platelets: Math.floor(Math.random() * 200) + 150,
      Prothrombin: +(Math.random() * 2 + 10).toFixed(1),
    });
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error(`Prediction request failed (${response.status})`);
      const data = await response.json();
      if (!data.prediction || data.prediction.error) throw new Error('Prediction was not available');
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      alert('Prediction failed. Check that the local API is running and the inputs are valid.');
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logo} alt="Logo" style={{ height: '32px', width: '32px' }} />
          <span style={styles.logo}>PBC Tool</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About Us</Link>
          <Link to="/how-it-works" style={styles.navLink}>How It Works</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <>
              <section style={styles.hero}>
                <h1 style={styles.heroTitle}>🧪 PBC Stage Predictor</h1>
                <p style={styles.heroSubtitle}>A 2025 hackathon prototype. Use example values only; this is not a clinical tool.</p>
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
                <h2 style={{ marginBottom: '1rem' }}>Enter Example Data</h2>
                <p>Do not enter identifiable patient information. Results are experimental and are not a diagnosis.</p>

                {Object.entries(form).map(([key, value]) => (
                  <div key={key} style={{ textAlign: 'left' }}>
                    <label htmlFor={key} style={{ fontWeight: 600 }}>
                      {key} {fieldUnits[key] && <span style={{ fontWeight: 400, color: '#666' }}>({fieldUnits[key]})</span>}
                    </label>
                    {categoricalOptions[key] ? (
                      <select id={key} value={value} onChange={e => setForm({ ...form, [key]: e.target.value })} style={styles.input}>
                        {categoricalOptions[key].map(option => <option key={option} value={option}>{option}</option>)}
                      </select>
                    ) : (
                      <input
                        id={key}
                        type="number"
                        step="any"
                        value={value}
                        onChange={e => setForm({ ...form, [key]: Number(e.target.value) })}
                        style={styles.input}
                      />
                    )}
                  </div>
                ))}

                <div style={{ textAlign: 'center' }}>
                  <button style={styles.button} onClick={generateRandomData}>🎲 Generate Example Values</button>
                  <button style={styles.button} onClick={handleSubmit}>🚀 Run Prediction</button>
                </div>

                {result && (
                  <div style={styles.resultBlock}>
                    <p><strong>Stage:</strong> {result.Stage}</p>
                    <p><strong>Model interpretation:</strong> {result.Interpretation}</p>
                    <p>Experimental output only. Do not use it for clinical decisions.</p>
                    <p><strong>Probabilities:</strong></p>
                    <div style={{ marginTop: '1rem' }}>
                      {Object.entries(result.Probabilities).map(([label, prob]) => (
                        <div key={label} style={{ marginBottom: '0.5rem' }}>
                          <div style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{label}: {(prob * 100).toFixed(1)}%</div>
                          <div style={{
                            height: '10px',
                            width: '100%',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '5px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${(prob * 100).toFixed(1)}%`,
                              backgroundColor: '#3f51b5',
                              height: '100%',
                            }} />
                          </div>
                        </div>
                      ))} 
                    </div>
                  </div>
                )}
              </div>
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>


      <footer style={styles.footer}>
        <div>Built at Stat Hackathon 2025 · portfolio archive</div>
        <div>© 2025 PBC Stage Predictor. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;

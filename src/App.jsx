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
  SGOTxALKPHOS: '',
  SGOTxBILIRUBIN: '',
};

  const [form, setForm] = React.useState({
    Age: 50,
    Sex: 'F',
    Ascites: 0,
    Hepatomegaly: 0,
    Spiders: 0,
    Edema: 0,
    Bilirubin: 1.0,
    Cholesterol: 200,
    Albumin: 3.5,
    Copper: 100,
    Alk_Phos: 150,
    SGOT: 60,
    Tryglicerides: 180,
    Platelets: 250,
    Prothrombin: 11.0,
    SGOTxALKPHOS: 9000,
    SGOTxBILIRUBIN: 60,
  });

  const [result, setResult] = React.useState(null);

  const generateRandomData = () => {
    setForm({
      Age: Math.floor(Math.random() * 50) + 30,
      Sex: Math.random() < 0.5 ? 'F' : 'M',
      Ascites: Math.floor(Math.random() * 3),
      Hepatomegaly: Math.floor(Math.random() * 2),
      Spiders: Math.floor(Math.random() * 2),
      Edema: Math.floor(Math.random() * 2),
      Bilirubin: +(Math.random() * 4.5 + 0.5).toFixed(2),
      Cholesterol: Math.floor(Math.random() * 200) + 100,
      Albumin: +(Math.random() * 3 + 2.5).toFixed(2),
      Copper: Math.floor(Math.random() * 200),
      Alk_Phos: Math.floor(Math.random() * 300),
      SGOT: Math.floor(Math.random() * 150),
      Tryglicerides: Math.floor(Math.random() * 300),
      Platelets: Math.floor(Math.random() * 300) + 100,
      Prothrombin: +(Math.random() * 5 + 10).toFixed(1),
      SGOTxALKPHOS: Math.floor(Math.random() * 50000),
      SGOTxBILIRUBIN: Math.floor(Math.random() * 1000),
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch prediction. Is the API running?');
    }
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
          <h2 style={{ marginBottom: '1rem' }}>Enter Patient Data</h2>

          {Object.entries(form).map(([key, value]) => (
            <div key={key} style={{ textAlign: 'left' }}>
              <label htmlFor={key} style={{ fontWeight: 600 }}>
                {key} {fieldUnits[key] && <span style={{ fontWeight: 400, color: '#666' }}>({fieldUnits[key]})</span>}
              </label>
              <input
                id={key}
                type={typeof value === 'number' ? 'number' : 'text'}
                value={value}
                onChange={e =>
                  setForm({
                    ...form,
                    [key]: typeof value === 'number' ? +e.target.value : e.target.value
                  })
                }
                style={styles.input}
              />
            </div>
          ))}

          <div style={{ textAlign: 'center' }}>
            <button style={styles.button} onClick={generateRandomData}>🎲 Generate Random Data</button>
            <button style={styles.button} onClick={handleSubmit}>🚀 Run Prediction</button>
          </div>

          {result && (
            <div style={styles.resultBlock}>
              <p><strong>Stage:</strong> {result.Stage}</p>
              <p><strong>Interpretation:</strong> {result.Interpretation}</p>
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
      </main>

      <footer style={styles.footer}>
        <div>Made with ❤️ at Stat Hackathon 2025</div>
        <div>© 2025 PBC Stage Predictor. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;

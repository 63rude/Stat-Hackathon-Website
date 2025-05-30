import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <h1>🧪 PBC Stage Predictor</h1>
      <p>Insert clinical data to predict disease stage</p>
      <button onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}>
        Start Prediction
      </button>
    </section>
  );
}

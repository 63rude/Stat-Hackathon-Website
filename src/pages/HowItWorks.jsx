import React from 'react';

function HowItWorks() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 120px)', // leaves space for navbar and footer
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
        <h1>How It Works 🧠</h1>
        <p>
          <strong>1.</strong> 📝 Enter the patient’s clinical data in the form.<br />
          <strong>2.</strong> 🚀 Click <strong>“Run Prediction”</strong> to send the data to our model.<br />
          <strong>3.</strong> 🤖 The model analyzes the inputs and predicts the most likely PBC stage.<br />
          <strong>4.</strong> 📊 You'll get a detailed probability breakdown for each stage.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;

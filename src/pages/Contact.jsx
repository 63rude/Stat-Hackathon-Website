import React from 'react';

function Contact() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 120px)', // navbar + footer space
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
        <h1>Contact Us 📬</h1>
        <p>
          Have questions, suggestions, or feedback?<br />
          We'd love to hear from you! 💬<br /><br />
          📧 Email us at: <strong>stat-hackathon@example.com</strong>
        </p>
      </div>
    </div>
  );
}

export default Contact;

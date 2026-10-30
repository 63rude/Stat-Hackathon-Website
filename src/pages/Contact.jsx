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
        <h1>Project Archive 📬</h1>
        <p>
          This site was built for Stat Hackathon 2025 and is no longer an active service.<br />
          The frontend and backend repositories preserve the work and the local setup instructions.
        </p>
      </div>
    </div>
  );
}

export default Contact;

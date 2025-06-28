import React from 'react';

const AboutUs = ({ mode }) => {
  const myStyle = {
    backgroundColor: mode === 'dark' ? '#121212' : 'white',
    color: mode === 'dark' ? 'white' : '#121212',
    minHeight: '100vh',
    padding: '2rem'
  };

  return (
    <div style={myStyle} className="container">
      <h2 className="text-center mb-4">About SnapNews</h2>
      <p>
        <strong>SnapNews</strong> is your go-to platform for real-time news updates across the globe. We aim to deliver the latest headlines from various categories like technology, sports, health, science, business, and entertainment — all in one place.
      </p>
      <p>
        Our mission is to keep you informed with credible and concise news, powered by <a href="https://newsapi.org" target="_blank" rel="noreferrer">NewsAPI.org</a>. With our user-friendly interface, infinite scroll, and dark/light mode toggle, we strive to make your news reading experience smooth and enjoyable.
      </p>
      <p>
        This project was built with ❤️ using <strong>React.js</strong>, and it's continuously improving with new features and updates.
      </p>
      <p className="text-muted">Last updated: June 2025</p>
    </div>
  );
};

export default AboutUs;

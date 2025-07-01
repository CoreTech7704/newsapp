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
      <h2 className="text-center mb-4 display-6">About SnapNews</h2>

      <p>
        <strong>SnapNews</strong> is a modern React-based news aggregator designed to bring you the latest headlines across various categories such as technology, business, health, science, sports, and entertainment.
      </p>

      <p>
        Built for speed and usability, SnapNews features dynamic routing, dark/light theme switching, a smooth user interface, and responsive layout — all tailored to enhance your news-reading experience.
      </p>

      <p>
        This app uses the <a href="https://gnews.io" target="_blank" rel="noreferrer" style={{ color: mode === 'dark' ? '#61dafb' : '#0d6efd' }}>GNews API</a> for fetching top and trending headlines worldwide. GNews enables access to real-time content with CORS support, making it perfect for modern front-end deployment platforms like Netlify.
      </p>

      <p>
        SnapNews was built using <strong>React.js</strong> and <strong>Bootstrap</strong>, and is deployed on <strong>Netlify</strong>. It serves as a featured project in the developer's portfolio, demonstrating API integration, component-based architecture, and clean UI design.
      </p>

      <p className="mt-4 text-center">
        Made with ❤️ by <a href="https://github.com/CoreTech7704" target="_blank" rel="noreferrer">Sarvam Patel</a>
      </p>

      <p className="text-muted text-center">Last updated: June 2025</p>
    </div>
  );
};

export default AboutUs;

import React from 'react';

const Footer = ({ mode }) => {
  const footerClass = mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <footer className={`py-3 ${footerClass}`}>
      <div className="container text-center">
        <p className="mb-1">© 2025 SnapNews. All rights reserved.</p>
        <small>
          Made with ❤️ by <a href="https://github.com/CoreTech7704" target="_blank" rel="noreferrer">CoreTech7704</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
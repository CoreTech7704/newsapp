import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './Components/Spinner';
// Lazy-loaded components
const News = lazy(() => import('./Components/News'));
const AboutUs = lazy(() => import('./Components/Aboutus'));

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('in');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  const changeCountry = (code) => {
    setCountry(code);
  };

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#007bff" progress={progress} />
        <Navbar mode={mode} ToggleMode={toggleMode} changeCountry={changeCountry} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" mode={mode} country={country} category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" mode={mode} country={country} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" mode={mode} country={country} category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" mode={mode} country={country} category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" mode={mode} country={country} category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" mode={mode} country={country} category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" mode={mode} country={country} category="technology" />} />
            <Route path="/about" element={<AboutUs mode={mode} />} />
          </Routes>
        </Suspense>

        <Footer mode={mode} />
      </Router>
    </div>
  );
};

export default App;

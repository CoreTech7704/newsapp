import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Alert from './Components/Alert';
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
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 2000); // auto dismiss
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "success");
    }
  };

  const changeCountry = (code) => {
    setCountry(code);

    const countryNames = {
      us: "United States",
      in: "India",
      gb: "United Kingdom",
      au: "Australia",
      ca: "Canada",
      fr: "France",
      de: "Germany",
      it: "Italy",
      jp: "Japan"
    };

    const name = countryNames[code] || code.toUpperCase(); // fallback to code
    showAlert(`Country changed to ${name}`, "info");
  };


  return (
    <div>
      <Router basename="/">
        <LoadingBar height={3} color="#007bff" progress={progress} />
        <Navbar mode={mode} ToggleMode={toggleMode} changeCountry={changeCountry} />
        <div style={{ position: 'fixed', top: '70px', right: '20px', left: '20px', zIndex: 1050 }}>
          <Alert alert={alert} />
        </div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="general" mode={mode} country={country} category="general" />} />
            <Route path="/business" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="business" mode={mode} country={country} category="business" />} />
            <Route path="/entertainment" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="entertainment" mode={mode} country={country} category="entertainment" />} />
            <Route path="/health" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="health" mode={mode} country={country} category="health" />} />
            <Route path="/science" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="science" mode={mode} country={country} category="science" />} />
            <Route path="/sports" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="sports" mode={mode} country={country} category="sports" />} />
            <Route path="/technology" element={<News showAlert={showAlert} setProgress={setProgress} apikey={apikey} key="technology" mode={mode} country={country} category="technology" />} />
            <Route path="/about" element={<AboutUs mode={mode} />} />
          </Routes>
        </Suspense>

        <Footer mode={mode} />
      </Router>
    </div>
  );
};

export default App;

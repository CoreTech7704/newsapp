import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import LoadingBar from "react-top-loading-bar";
import AboutUs from './Components/Aboutus'; // ✅ Ensure filename casing matches exactly

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

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

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#007bff" progress={progress} />
        <Navbar mode={mode} ToggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} apikey={apikey} key="general" mode={mode} country="us" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} apikey={apikey} key="business" mode={mode} country="us" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apikey={apikey} key="entertainment" mode={mode} country="us" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} apikey={apikey} key="health" mode={mode} country="us" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} apikey={apikey} key="science" mode={mode} country="us" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} apikey={apikey} key="sports" mode={mode} country="us" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apikey={apikey} key="technology" mode={mode} country="us" category="technology" />}
          />
          <Route
            exact
            path="/about"
            element={<AboutUs mode={mode} />}
          />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </div>
  );
};

export default App;

import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  
  apikey=process.env.REACT_APP_NEWS_API;

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      progress: 0
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar height={3} color="#007bff" progress={this.state.progress} />
          <Navbar mode={this.state.mode} ToggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" mode={this.state.mode} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" mode={this.state.mode} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" mode={this.state.mode} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" mode={this.state.mode} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" mode={this.state.mode} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" mode={this.state.mode} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" mode={this.state.mode} country="us" category="technology" />} />
          </Routes>
          <Footer mode={this.state.mode} />
        </Router>
      </div>
    );
  }
}

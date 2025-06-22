import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  pageSize=9;
  
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light' // Possible values: 'light' or 'dark'
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      // alert("Dark Mode has been enabled");
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // alert("Light Mode has been enabled");
    }
  };

  render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} ToggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News key="general" mode={this.state.mode} pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" mode={this.state.mode} pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" mode={this.state.mode} pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" mode={this.state.mode} pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

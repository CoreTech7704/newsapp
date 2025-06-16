import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}

// news api key: a3651e4c91ba4e8891fe770bc0fe53c0
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
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
        <Navbar mode={this.state.mode} ToggleMode={this.toggleMode} />
        <News mode={this.state.mode} pageSize={8} country="us" category="general"/>
      </div>
    );
  }
}

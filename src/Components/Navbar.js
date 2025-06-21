import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {
    mode: PropTypes.string
  };

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">SnapNews</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            {/* Dropdown for categories */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className={`dropdown-menu dropdown-menu-${this.props.mode}`} aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/business">Business</Link></li>
              <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
              <li><Link className="dropdown-item" to="/health">Health</Link></li>
              <li><Link className="dropdown-item" to="/science">Science</Link></li>
              <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
              <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            </ul>

            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>

              {/* Toggle Button for Dark/Light Mode */}
              <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="modeSwitch"
                  onClick={this.props.ToggleMode}
                />
                <label className="form-check-label" htmlFor="modeSwitch">
                  Enable {this.props.mode === 'light' ? 'Dark' : 'Light'} Mode
                </label>
              </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

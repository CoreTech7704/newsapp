import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
    return this.props.loading ? (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : null;
  }
}

export default Spinner;

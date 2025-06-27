import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  render() {
    const { alert } = this.props;

    return (
      alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{this.capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
  })
};

export default Alert;
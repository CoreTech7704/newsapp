import React from 'react';

const Spinner = ({ loading }) => {
  return loading ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '10vh' }}
    >
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : null;
};

export default Spinner;

import React from 'react';
import PropTypes from 'prop-types';

const Tool = ({ src, alt }) => (
  <div className="main-tools-container">
    <img src={src} alt={alt} />
  </div>
);

Tool.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Tool;

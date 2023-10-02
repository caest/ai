import React from 'react';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button aria-label="prev slide" className="footer-arrow footer-prev" onClick={onClick}>
<span className="icon-arrow-prev"></span>
    </button>
  );
}

export default SamplePrevArrow;

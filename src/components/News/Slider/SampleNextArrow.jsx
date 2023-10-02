import React from "react";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button aria-label="next slide" className="slider-arrow arrow-next" onClick={onClick}>
          <span className="icon-arrow-next"></span>
      </button>
    );
  }
export default SampleNextArrow;  
import React from "react";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button aria-label="next slide" className="footer-arrow footer-next" onClick={onClick}>
          <span className="icon-arrow-next"></span>
      </button>
    );
  }
export default SampleNextArrow;  
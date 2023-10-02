import React, {useEffect } from 'react';
import './news.scss';
import NewsSlider from './Slider/Slider';
import ScrollMagic from 'scrollmagic';


const News = () => {

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const elements = document.querySelectorAll('.news-content');

    elements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
      })
      .setClassToggle(element, 'visible')
      .addTo(controller);
    });
  }, []);

  return (
    <div className="news">
       <div className="container">
       <h2 className="title">Latest News</h2>
        <div className="news-content">
            <NewsSlider />
        </div>
       </div>
    </div>
  );
};

export default News;

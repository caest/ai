import React, { useEffect, useState } from 'react';
import './products.scss';
import Button from '../Button/Button';
import gpt from './images/gpt.svg';
import video from '../Development/video.mp4';
import ScrollMagic from 'scrollmagic';
import CountUp from 'react-countup';

const Products = () => {

    const [startAnimation, setStartAnimation] = useState({
        frameOne: false,
        frameTwo: false,
    });

    const duration = 2;

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
    
        const elements = document.querySelectorAll('.products-wrap , .products-container, .products-frame');
    
        elements.forEach((element) => {
          new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9,
          })
          .setClassToggle(element, 'visible')
          .addTo(controller);
        });

        new ScrollMagic.Scene({ triggerElement: ".products-frame:nth-child(1)", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, frameOne: true })))
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: ".products-frame:nth-child(2)", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, frameTwo: true })))
            .addTo(controller);

    }, []);

  return (
    <div className="products">
        <h2 className="title">Our Products</h2>
        <div className="container">
            <div className="products-content">
                <div className="products-column">
                    <div className="products-wrap">
                        <video className="products-wrap-video" autoPlay muted loop>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="products-wrap-overlay"></div>
                        <div className="products-container">
                            <div className="products-container-title">Product v1</div>
                            <div className="products-container-image">
                                <img src={gpt} alt="" />
                            </div>
                        </div>
                        <div className="products-container">
                            <div className="products-container-text">
                                Select the right tools and technologies to simplify development and maintenance.
                                Select the right tools and technologies to simplify development and maintenance.
                            </div>
                            <div className="products-container-button">
                                <Button href="#" text="Learn more" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-column">
                    <div className="products-frame">
                        <div className="products-frame-numbers">
                            <CountUp end={startAnimation.frameOne ? 50 : 0} duration={duration} suffix="%" />
                        </div>
                        <div className="products-frame-procent">
                            <CountUp end={startAnimation.frameOne ? 50 : 0} duration={duration} suffix="%" />
                        </div>
                        <div className="products-frame-text">Boost Marketing ROI by</div>
                        <div className="products-frame-title">Product demo v1</div>
                        <div className="products-frame-description">
                            Select the right tools and technologies to simplify development and maintenance.
                        </div>
                        <div className="products-frame-progress"></div>
                    </div>
                    <div className="products-frame">
                        <div className="products-frame-numbers">
                            <CountUp end={startAnimation.frameTwo ? 90 : 0} duration={duration} suffix="%" />
                        </div>
                        <div className="products-frame-procent">
                            <CountUp end={startAnimation.frameTwo ? 90 : 0} duration={duration} suffix="%" />
                        </div>
                        <div className="products-frame-text">Boost Marketing ROI by</div>
                        <div className="products-frame-title">Product demo v2</div>
                        <div className="products-frame-description">
                            Select the right tools and technologies to simplify development and maintenance.
                        </div>
                        <div className="products-frame-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import './development.scss';
import Button from "../Button/Button";
import iconOne from './images/Icon-1.svg';
import iconSecond from './images/Icon-2.svg';
import iconThird from './images/Icon-3.svg';
import iconFour from './images/Icon-4.svg';
import ScrollMagic from 'scrollmagic';
import CountUp from 'react-countup';
import Video from './video.jsx';

const Development = () => {
    const [startAnimation, setStartAnimation] = useState({
        cardOne: false,
        cardTwo: false,
        cardThree: false,
        cardFour: false,
    });
    
    const duration = 2;

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
        const elements = document.querySelectorAll('.development-card, .title, .development-btn, .development-mbtn, .development-container');

        elements.forEach((element) => {
            new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.9,
            })
            .setClassToggle(element, 'visible') 
            .addTo(controller);
        });

        new ScrollMagic.Scene({ triggerElement: "#development-card-1", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, cardOne: true })))
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#development-card-2", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, cardTwo: true })))
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#development-card-3", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, cardThree: true })))
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#development-card-4", triggerHook: 0.9 })
            .on('enter', () => setStartAnimation(prev => ({ ...prev, cardFour: true })))
            .addTo(controller);
    }, []);

    return (
        <div className="development" id="Development">
            <div className="container">
                <h2 className="title">End-to-End Product Development</h2>
                <div className="development-content">
                    <div className="development-container">
                        <div className="development-card" id="development-card-1">
                            <div className="development-card-image">
                                <img src={iconOne} alt="" />
                            </div>
                            <div className="development-card-numbers">
                                <CountUp start={startAnimation.cardOne ? 0 : 30} end={30} paused={!startAnimation.cardOne} duration={duration} />%
                            </div>
                            <div className="development-card-title">Accelerate Development Process by 30%:</div>
                            <div className="development-card-text">Our unique methodologies and experienced team cut down the time to market.</div>
                        </div>
                        <div className="development-card" id="development-card-2">
                            <div className="development-card-image">
                                <img src={iconSecond} alt="" />
                            </div>
                            <div className="development-card-numbers">
                                <CountUp start={startAnimation.cardTwo ? 0 : 25} end={25} paused={!startAnimation.cardTwo} duration={duration} />%
                            </div>
                            <div className="development-card-title">Increase ROI by 25%:</div>
                            <div className="development-card-text">Focused user-centric design and high-quality development ensure a profitable return on investment.</div>
                        </div>
                        <div className="development-btn">
                            <Button href="#" text="Get a Quote" />
                        </div>
                    </div>
                    <div className="development-container">
                        <Video />
                    </div>
                    <div className="development-container">
                        <div className="development-card mh330" id="development-card-3">
                            <div className="development-card-image">
                                <img src={iconThird} alt="" />
                            </div>
                            <div className="development-card-numbers">
                                <CountUp start={startAnimation.cardThree ? 0 : 20} end={20} paused={!startAnimation.cardThree} duration={duration} />%
                            </div>
                            <div className="development-card-title">Reduce Development Costs by 20%:</div>
                            <div className="development-card-text">Effective resource management and code optimization contribute to lower expenses.</div>
                        </div>
                        <div className="development-card mh330" id="development-card-4">
                            <div className="development-card-image">
                                <img src={iconFour} alt="" />
                            </div>
                            <div className="development-card-numbers">
                                <CountUp start={startAnimation.cardFour ? 0 : 15} end={15} paused={!startAnimation.cardFour} duration={duration} />%
                            </div>
                            <div className="development-card-title">Reduce Post-Launch Errors by 15%:</div>
                            <div className="development-card-text">Our rigorous testing and quality assurance result in a more stable and reliable product.</div>
                        </div>
                    </div>
                </div>
                <div className="development-mbtn">
                    <Button href="#" text="Get a Quote" />
                </div>
            </div>
        </div>
    );
};

export default Development;

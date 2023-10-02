import React, {useEffect } from 'react';
import './support.scss';
import iconOne from './images/1.svg';
import iconSecond from './images/2.svg';
import iconThird from './images/3.svg';
import iconFour from './images/4.svg';
import Button from '../Button/Button';
import ScrollMagic from 'scrollmagic';


const Support = () => {

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
    
        const elements = document.querySelectorAll('.support-subtitle, .support-container');
    
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
    <div className="support">
        <div className="container">
        <h2 className="title">24/7 Expert Product Support and Maintenance</h2>
        <div className="support-subtitle">Experience peace of mind with our high-quality, around-the-clock support and maintenance services.</div>
        <div className="support-content">
            <div className="support-container">
                <div className="support-container-image">
                    <img src={iconOne} alt="" />
                </div>
                <div className="support-wrap">
                    <div className="support-container-title">Constant Availability</div>
                    <div className="support-container-text">With us, your product is under reliable protection 24/7.</div>
                </div>
            </div>
            <div className="support-container">
                <div className="support-container-image">
                    <img src={iconSecond} alt="" />
                </div>
                <div className="support-wrap">
                    <div className="support-container-title">Rapid Problem Resolution:</div>
                    <div className="support-container-text">Our experienced specialists minimize response time for critical incidents.</div>
                </div>
            </div>
            <div className="support-container">
                <div className="support-container-image">
                    <img src={iconThird} alt="" />
                </div>
                <div className="support-wrap">
                    <div className="support-container-title">Effective Optimization:</div>
                    <div className="support-container-text">We don't just solve issues, we optimize your product for future resilience.</div>
                </div>
            </div>
            <div className="support-container">
                <div className="support-container-image">
                    <img src={iconFour} alt="" />
                </div>
                <div className="support-wrap">
                    <div className="support-container-title">Cost-Effective:</div>
                    <div className="support-container-text">Outsourcing to us eliminates the need for in-house staff, making support more economical.</div>
                </div>
            </div>
        </div>
        <div className="support-btn">
        <Button href="#" text="Experience 24/7 Expert Support" />
        </div>
        </div>
    </div>
  );
};

export default Support;

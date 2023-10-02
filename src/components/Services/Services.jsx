import React, { useEffect } from "react";
import './services.scss';
import iconOne from './images/one.svg';
import iconSecond from './images/second.svg';
import iconThird from './images/third.svg';
import iconFour from './images/four.svg';
import iconFive from './images/five.svg';
import iconSix from './images/six.svg';
import Button from '../Button/Button';
import ScrollMagic from 'scrollmagic';

const Services = () => {

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const elements = document.querySelectorAll('.services-card, .title, .button');

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
    <div className="services" id="Services">
      <div className="container">
        <h2 className="title">Our Services</h2>
        <div className="services-content">
          <div className="services-card">
            <div className="services-image">
              <img src={iconOne} alt="" />
            </div>
            <h3 className="services-card-title">AI-Driven Optimization of Existing Products</h3>
            <div className="services-card-text">Our team of experts analyzes your current digital product to identify opportunities for optimization through artificial intelligence. Enhance UX, increase efficiency, and reduce operational costs with our tailored solutions.</div>
          </div>
          <div className="services-card">
            <div className="services-image">
              <img src={iconSecond} alt="" />
            </div>
            <h3 className="services-card-title">End-to-End Product Development</h3>
            <div className="services-card-text">Our product creation process includes research, development, testing, and launch. We select the best and most suitable technologies for your project to ensure its long-term success.</div>
          </div>
          <div className="services-card">
            <div className="services-image">
              <img src={iconThird} alt="" />
            </div>
            <h3 className="services-card-title">End-to-End Product Development</h3>
            <div className="services-card-text">Our product creation process includes research, development, testing, and launch. We select the best and most suitable technologies for your project to ensure its long-term success.</div>
          </div>
          <div className="services-card">
            <div className="services-image">
              <img src={iconFour} alt="" />
            </div>
            <h3 className="services-card-title">Innovation and Growth Consulting</h3>
            <div className="services-card-text">By engaging with your business, we uncover untapped opportunities and offer innovative ideas for expansion and improvement of your product or service.</div>
          </div>
          <div className="services-card">
            <div className="services-image">
              <img src={iconFive} alt="" />
            </div>
            <h3 className="services-card-title">Selection and Integration of Optimal Tech Solutions</h3>
            <div className="services-card-text">We assist you in choosing the best tools and platforms for your product and ensure seamless integration for maximum efficiency.</div>
          </div>
          <div className="services-card">
            <div className="services-image">
              <img src={iconSix} alt="" />
            </div>
            <h3 className="services-card-title">Post-Launch Product Support and Maintenance</h3>
            <div className="services-card-text">Our job doesn’t end with the product launch. We offer a full range of support and maintenance services to keep your product up-to-date and effective.</div>
          </div>
        </div>
        <div className="services-button">
          <Button href="#" text="get in touch" />
        </div>
      </div>
    </div>
  );
};

export default Services;

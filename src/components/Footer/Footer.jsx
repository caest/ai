import React, {useEffect } from "react";
import './footer.scss';
import logo from './images/logo.svg';
import Button from "../Button/Button";
import footerLogo from './images/footer-logo.svg';
import FooterSlider from "./Slider/Slider";
import ScrollMagic from 'scrollmagic';


const Footer = () => {

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
    
        const elements = document.querySelectorAll('.footer-top-column , .footer-content');
    
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
        <div className="footer">
                <div className="footer-top">
                   <div className="container">
                    <div className="footer-top-wrap">
                    <div className="footer-top-column">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-top-column">
                        <div className="footer-nav">
                            <ul className="footer-nav-list">
                                <li><p className="footer-nav-title">Main Menu</p></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Our services</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Product optimization</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Product development</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Scaling</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Support</a></li>
                            </ul>
                            <ul className="footer-nav-list">
                                <li> <p className="footer-nav-title">Development Services</p></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Consulting Services</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Complex systems</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Back-End Development</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Front-End Development</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Web Accessibility</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Conclusion</a></li>
                            </ul>
                            <ul className="footer-nav-list">
                            <li><p className="footer-nav-title">We also</p></li>
                                
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Aiweb</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Webtopro</a></li>
                                <li className="footer-nav-item"><a href="" className="footer-nav-link">Accessibi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-top-column">
                        <div className="footer-accessibility">
                            <div className="footer-accessibility-title"><span className="icon-accessbility"></span> Web Accessibility Fact Headline:</div>
                        <div className="footer-accessibility-subtitle">"Did You Know an Inaccessible Website Can Lower Your Conversion by Up to <b>30%</b>?"</div>
                        <div className="footer-accessibility-description">"Web accessibility is not just good practice—it's a critical business asset. It not only makes your site accessible to a broader range of users, including those with physical impairments, but it can also boost your conversion rates by up to 30%."</div>
                        <div className="footer-button">  <Button href="#" text="Check Website Accessibility" />
                      </div>
                        </div>
                    </div>
                    </div>
                   </div>
               
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-content">
                        <div className="footer-slider">
                            <FooterSlider />
                        </div>
                            <div className="footer-image">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div className="footer-contact">
                                <div className="footer-contact-top">
                                    <a className="footer-contact-link" href="mailto:we@aiweb.co.il"><span className="icon-mail"></span>we@aiweb.co.il</a>
                                    <a className="footer-contact-link" href="tel:0528852345"><span className="icon-call"></span>0528852345</a>
                                    <p className="footer-contact-link" >Contact Us</p>
                                </div>
                                <div className="footer-contact-social">
                                    <a aria-label="social link" href="#"><span className="icon-linkedin"></span></a>
                                    <a aria-label="social link" href="#"><span className="icon-vector"></span></a>
                                    <a aria-label="social link" href="#"><span className="icon-facebook"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copy">
                   <div className="footer-copy-info">
                   <a href="#">Terms of use</a>
                    <a href="#">Privacy Policy</a>
                    <p>AIWE ©2023 All rights reserved</p>
                   </div>
                   <div>
                    <a className="footer-dev" href="#">Created by AIWEB</a>
                   </div>
                </div>
                    </div>
                 
                </div>
             
        </div>
    )
}

export default Footer;
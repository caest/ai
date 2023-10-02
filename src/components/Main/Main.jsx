import React, {useEffect } from "react";
import './main.scss';
import backGround from './background.svg';
import Header from "./Header/Header";
import MainTools from "./MainTools";
import MainContent from "./MainContent";
import ScrollMagic from 'scrollmagic';

const Main = () => {

    useEffect(() => {
        const controller = new ScrollMagic.Controller();
    
        const elements = document.querySelectorAll('.header-content, .main-schedule , .main-title , .main-subtitile , .main-image, .main-wrapper , .main-tools-container');
    
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
        <div className="main" id="Main">
            <Header />
        <div className="container">
            <MainContent />
            <MainTools />
        </div>
            <div className="main-bg">
               {/*  <img src={backGround} alt="" /> */}
            </div>
        </div>
    );
};

export default Main;


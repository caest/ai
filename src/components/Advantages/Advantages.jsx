import React, { useEffect, useState, useRef } from "react";
import "./advantages.scss";
import Button from "../Button/Button";
import ScrollMagic from "scrollmagic";
import { gsap } from 'gsap';
import CountUp, { useCountUp } from "react-countup";
/* import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, gsap); */

const Advantages = () => {
  const [startAnimation, setStartAnimation] = useState({
    containerOne: false,
    containerTwo: false,
    containerThree: false,
    containerFour: false,
    containerFive: false, 
  });

  const countUpRefOne = useRef();
  const countUpRefTwo = useRef();
  const countUpRefThree = useRef();
  const countUpRefFour = useRef();
  const countUpRefFive = useRef(); 
  
  const { start: startCountUpOne } = useCountUp({ ref: countUpRefOne, end: 20, duration: 2, startOnMount: false });
  const { start: startCountUpTwo } = useCountUp({ ref: countUpRefTwo, end: 20, duration: 2, startOnMount: false });
  const { start: startCountUpThree } = useCountUp({ ref: countUpRefThree, end: 15, duration: 2, startOnMount: false });
  const { start: startCountUpFour } = useCountUp({ ref: countUpRefFour, end: 10, duration: 2, startOnMount: false });
  const { start: startCountUpFive } = useCountUp({ ref: countUpRefFive, end: 25, duration: 2, startOnMount: false });
  
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const elements = document.querySelectorAll(".advantages-container, .advantages-image");

    elements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
      })
        .setClassToggle(element, "visible")
        .addTo(controller);
    });
    
    new ScrollMagic.Scene({ triggerElement: ".advantages-container:nth-child(1)", triggerHook: 0.9 })
      .on("enter", () => {
        setStartAnimation((prev) => ({ ...prev, containerOne: true }));
        startCountUpOne();
      })
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".advantages-container:nth-child(1)", triggerHook: 0.9 })
      .on("enter", () => {
        setStartAnimation((prev) => ({ ...prev, containerTwo: true }));
        startCountUpTwo();
      })
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".advantages-container:nth-child(2)", triggerHook: 0.9 })
      .on("enter", () => {
        setStartAnimation((prev) => ({ ...prev, containerThree: true }));
        startCountUpThree();
      })
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".advantages-container:nth-child(3)", triggerHook: 0.9 })
      .on("enter", () => {
        setStartAnimation((prev) => ({ ...prev, containerFour: true }));
        startCountUpFour();
      })
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".advantages-container:nth-child(4)", triggerHook: 0.9 })
      .on("enter", () => {
        setStartAnimation((prev) => ({ ...prev, containerFive: true }));
        startCountUpFive();
      })
      .addTo(controller);

    gsap.set("#svg", { y: -50, x: 0 });
    gsap.set("#anim1", { y: 100, x: 200 }); 
    gsap.set("#anim2", { y: 100, x: -200 }); 
    gsap.set("#anim3", { y: -280, x: 200 }); 
    gsap.set("#anim4", { y: -240, x: -200 }); 
  
    const timeline = gsap.timeline({ ease: "none" });
  
    timeline.to("#svg", { y: 0, x: 0 }, 0); 
    timeline.to("#anim1", { y: 0, x: 0 }, 0); 
    timeline.to("#anim2", { y: 0, x: 0 }, 0); 
    timeline.to("#anim3", { y: 0, x: 0 }, 0); 
    timeline.to("#anim4", { y: 0, x: 0 }, 0); 
  
    new ScrollMagic.Scene({ triggerElement: "#svg", duration: 200 })
      .setTween(timeline)
      .addTo(controller);
  }, []);


  return (
    <div className="advantages" id="Qa">
      <div className="container">
        <h2 className="title">AI-Driven Optimization for Your Existing Products</h2>
        <div className="advantages-content">
          <div className="advantages-column">
            <div className="advantages-image">
            <svg id="svg" width="647" height="601" viewBox="0 0 647 601" fill="none" xmlns="http://www.w3.org/2000/svg">

        <rect id="anim1" width="314.175" height="286.817" rx="17.6503" fill="white"/>
        <text id="anim1" x="30" y="80" fontWeight={900} fontSize={58} fill="#272D4E">
                +<tspan ref={countUpRefOne}>0</tspan>%
                </text>
                <text id="anim1" x="165" y="195" fontWeight={900} fontSize={32} fill="#272D4E">
                <tspan ref={countUpRefTwo}>0</tspan>%
                </text>
<path id="anim1"  d="M270 184.5C270 166.347 263.095 148.873 250.685 135.623C238.276 122.374 221.291 114.34 203.176 113.153C185.062 111.966 167.174 117.713 153.141 129.23C139.108 140.746 129.981 157.169 127.612 175.167C125.242 193.166 129.807 211.391 140.381 226.147C150.955 240.903 166.746 251.085 184.551 254.626C202.356 258.168 220.841 254.804 236.257 245.218C251.673 235.632 262.865 220.54 267.564 203.006L251.057 198.583C247.482 211.927 238.964 223.411 227.233 230.706C215.501 238.001 201.434 240.561 187.885 237.866C174.336 235.17 162.319 227.422 154.272 216.193C146.225 204.964 142.751 191.094 144.554 177.398C146.358 163.701 153.303 151.204 163.982 142.44C174.661 133.676 188.274 129.302 202.059 130.205C215.844 131.109 228.769 137.222 238.213 147.305C247.656 157.388 252.911 170.685 252.911 184.5H270Z" fill="#F3F3F5"/>
<path id="anim1"  d="M267 184.5C268.657 184.5 270.007 185.844 269.937 187.499C269.454 199.009 266.196 210.248 260.421 220.25C254.145 231.119 245.119 240.145 234.25 246.421C223.381 252.696 211.051 256 198.5 256C186.951 256 175.588 253.202 165.379 247.866C163.911 247.098 163.422 245.258 164.25 243.823L169.794 234.219C170.623 232.785 172.454 232.301 173.933 233.049C181.536 236.897 189.951 238.911 198.5 238.911C208.051 238.911 217.434 236.397 225.706 231.621C233.977 226.846 240.846 219.977 245.621 211.706C249.896 204.302 252.359 196.007 252.828 187.499C252.92 185.844 254.254 184.5 255.911 184.5H267Z" fill="#3B82F6"/>

<rect id="anim2" x="331.828" width="314.175" height="286.817" rx="17.6503" fill="#3E0C5A"/>
<text id="anim2" x="450" y="80" fontWeight={900} fontSize={58} fill="#fff">
                +<tspan ref={countUpRefThree}>0</tspan>%
                </text>
<rect id="anim2" x="480" y="112" width="20" height="140" rx="3" fill="#683287"/>
<rect id="anim2" x="534" y="112" width="20" height="140" rx="3" fill="#683287"/>
<rect id="anim2" x="507" y="112" width="20" height="140" rx="3" fill="#683287"/>
<rect id="anim2" x="561" y="112" width="20" height="140" rx="3" fill="#683287"/>
<rect id="anim2" x="588" y="112" width="20" height="140" rx="3" fill="#683287"/>
<rect id="anim2" x="480" y="217" width="20" height="35" rx="3" fill="white"/>
<rect id="anim2" x="534" y="160" width="20" height="92" rx="3" fill="white"/>
<rect id="anim2" x="507" y="177" width="20" height="75" rx="3" fill="white"/>
<rect id="anim2" x="561" y="207" width="20" height="45" rx="3" fill="white"/>
<rect id="anim2" x="588" y="170" width="20" height="82" rx="3" fill="white"/>

<rect id="anim3"  y="313.292" width="314.175" height="286.817" rx="17.6503" fill="#5DA2FF"/>
<text id="anim3" x="30" y="390" fontWeight={900} fontSize={58} fill="#fff">
                +<tspan ref={countUpRefFour}>0</tspan>%
                </text>
<circle id="anim3"  cx="198.5" cy="498.5" r="70.5" fill="#3B82F6"/>
<path id="anim3"  d="M269 498.5C269 510.875 265.742 523.033 259.555 533.75C253.367 544.467 244.467 553.367 233.75 559.555C223.033 565.742 210.875 569 198.5 569C186.125 569 173.967 565.742 163.25 559.555C152.533 553.367 143.633 544.467 137.445 533.75C131.258 523.033 128 510.875 128 498.5C128 486.125 131.258 473.967 137.445 463.25C143.633 452.533 152.533 443.633 163.25 437.445L198.5 498.5H269Z" fill="#83B8FF"/>
<path id="anim3"  d="M269 498.5C269 510.875 265.742 523.033 259.555 533.75L198.5 498.5H269Z" fill="white"/>

<rect id="anim4"  x="331.828" y="313.292" width="314.175" height="286.817" rx="17.6503" fill="#272D4E"/>
<text id="anim4" x="450" y="390" fontWeight={900} fontSize={58} fill="#fff">
                +<tspan ref={countUpRefFive}>0</tspan>%
                </text>
<g id="anim4"  filter="url(#filter0_d_145_8)">
<path d="M609 463C609 463 596.921 511.556 586.351 511.556C575.781 511.556 571.252 483.444 557.662 483.444C544.073 483.444 527.464 555 513.874 555C500.285 555 483.675 511.556 474.616 511.556C465.556 511.556 454.987 544.778 438.377 544.778C423.592 544.778 423.592 527.86 418.748 532.415C413.905 536.969 409.389 537.033 401.989 523.224C394.589 509.415 389.073 536.887 381 523.224" stroke="#6975B4" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_145_8" x="364.999" y="456.999" width="260.002" height="124.001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.140156 0 0 0 0 0.162825 0 0 0 0 0.2875 0 0 0 0.55 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_145_8"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_145_8" result="shape"/>
</filter>
</defs>
</svg>

              {/* <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="647" height="601" fill="none">
                <g fill="#fff">
                
                  <rect id="anim1" width="314.175" height="286.817" rx="17.65" />
                </g>
                <text id="anim1" x="30" y="80" fontWeight={900} fontSize={58} fill="#272D4E">
                <tspan ref={countUpRefOne}>0</tspan>%
                </text>
                <text id="anim1" x="165" y="195" fontWeight={900} fontSize={32} fill="#272D4E">
                <tspan ref={countUpRefTwo}>0</tspan>%
                </text>
                <path id="anim1" fill="#f3f3f5" d="M270 184.5a71.5 71.5 0 1 0-2.436 18.506l-16.507-4.423a54.41 54.41 0 1 1 1.854-14.083H270z" />
                <path id="anim1"  fill="#3b82f6" d="M267 184.5c1.657 0 3.007 1.344 2.937 2.999a71.494 71.494 0 0 1-35.687 58.922 71.503 71.503 0 0 1-68.871 1.445c-1.468-.768-1.957-2.608-1.129-4.043l5.544-9.604c.829-1.434 2.66-1.918 4.139-1.17a54.405 54.405 0 0 0 78.895-45.55c.092-1.655 1.426-2.999 3.083-2.999H267z" />
               
                <rect id="anim2" width="314.175" height="286.817" x="331.828" fill="#3e0c5a" rx="17.65" />
                <text id="anim2" x="450" y="80" fontWeight={900} fontSize={58} fill="#fff">
                <tspan ref={countUpRefThree}>0</tspan>%
                </text>
                <g id="anim2" fill="#683287">
                  <rect width="20" height="140" x="480" y="112" rx="3" />
                  <rect width="20" height="140" x="534" y="112" rx="3" />
                  <rect width="20" height="140" x="507" y="112" rx="3" />
                  <rect width="20" height="140" x="561" y="112" rx="3" />
                  <rect width="20" height="140" x="588" y="112" rx="3" />
                </g>
                <g id="anim2" fill="#fff">
                  <rect width="20" height="35" x="480" y="217" rx="3" />
                  <rect width="20" height="92" x="534" y="160" rx="3" />
                  <rect width="20" height="75" x="507" y="177" rx="3" />
                  <rect width="20" height="45" x="561" y="207" rx="3" />
                  <rect width="20" height="82" x="588" y="170" rx="3" />
                </g>
                <rect id="anim3" width="314.175" height="286.817" y="313.292" fill="#5da2ff" rx="17.65" />
                <text id="anim3" x="30" y="390" fontWeight={900} fontSize={58} fill="#fff">
                <tspan ref={countUpRefFour}>0</tspan>%
                </text>
                <circle id="anim3" cx="198.5" cy="498.5" r="70.5" fill="#3b82f6" />
                <path id="anim3" fill="#83b8ff" d="M269 498.5a70.507 70.507 0 0 1-105.75 61.055 70.507 70.507 0 0 1-25.805-96.305 70.511 70.511 0 0 1 25.805-25.805L198.5 498.5H269z" />
                <path id="anim3"
                  fill="#fff"
                  d="m 269 498.5 A 70.507 70.507 0 0 1 259.555 533.75 l -61.055 -35.25 h 70.5 Z z"
                />
                <rect id="anim4" width="314.175" height="286.817" x="331.828" y="313.292" fill="#272d4e" rx="17.65" />
                <text id="anim4" x="450" y="390" fontWeight={900} fontSize={58} fill="#fff">
                <tspan ref={countUpRefFive}>0</tspan>%
                </text>

                <g id="anim4" filter="url(#A)">
                  <path stroke="#6975b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M609 463s-12.079 48.556-22.649 48.556-15.099-28.112-28.689-28.112S527.464 555 513.874 555s-30.199-43.444-39.258-43.444-19.629 33.222-36.239 33.222c-14.785 0-14.785-16.918-19.629-12.363s-9.359 4.618-16.759-9.191-12.916 13.663-20.989 0" />
                </g>
                <defs>
                  <filter id="A" width="260.002" height="124.001" x="364.999" y="456.999" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="A" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix values="0 0 0 0 0.140156 0 0 0 0 0.162825 0 0 0 0 0.2875 0 0 0 0.55 0" />
                    <feBlend in2="A" />
                    <feBlend in="SourceGraphic" />
                  </filter>
                </defs>
              </svg> */}
            </div>
          </div>
          <div className="advantages-column">
            <div className="advantages-container">
              <div className="advantages-color advantages-color1"></div>
              <div className="advantages-wrap">
                <h3 className="advantages-title">
                  Improve User Experience by
                  <b>
                    {" "}
                    <CountUp end={startAnimation.containerOne ? 20 : 0} duration={2} suffix="%" />
                  </b>
                </h3>
                <div className="advantages-text">Tailor user interactions for higher engagement and customer satisfaction.</div>
              </div>
            </div>
            <div className="advantages-container">
              <div className="advantages-color advantages-color2"></div>
              <div className="advantages-wrap">
                <h3 className="advantages-title">
                  Reduce Task Completion Time by
                  <b>
                    {" "}
                    <CountUp end={startAnimation.containerTwo ? 15 : 0} duration={2} suffix="%" />
                  </b>
                </h3>
                <div className="advantages-text">Automate mundane tasks to save time and focus on what truly matters.</div>
              </div>
            </div>
            <div className="advantages-container">
              <div className="advantages-color advantages-color3"></div>
              <div className="advantages-wrap">
                <h3 className="advantages-title">
                  Boost Website Conversion by
                  <b>
                    {" "}
                    <CountUp end={startAnimation.containerThree ? 10 : 0} duration={2} suffix="%" />
                  </b>
                </h3>
                <div className="advantages-text">Use AI to personalize content and engage users more effectively.</div>
              </div>
            </div>
            <div className="advantages-container">
              <div className="advantages-color advantages-color4"></div>
              <div className="advantages-wrap">
                <h3 className="advantages-title">
                  Cut Customer Support Costs by
                  <b>
                    {" "}
                    <CountUp end={startAnimation.containerFour ? 25 : 0} duration={2} suffix="%" />
                  </b>
                </h3>
                <div className="advantages-text">Integrate AI chatbots for efficient customer service.</div>
              </div>
            </div>
            <div className="advantages-btn">
              <Button href="#" text="Optimize with Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;

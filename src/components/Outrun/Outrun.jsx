import React, { useEffect, useState, useRef } from 'react';
import './outrun.scss';
import iconOne from './images/1.svg';
import iconSecond from './images/2.svg';
import iconThird from './images/3.svg';
import iconFour from './images/4.svg';
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';
import CountUp, { useCountUp } from 'react-countup';


const Outrun = () => {
    const [startAnimation, setStartAnimation] = useState({
      one: false,
      two: false,
      three: false,
      four: false,
    });

    const countUpRefOne = useRef();
    const { start: startCountUpOne } = useCountUp({ ref: countUpRefOne, end: 100, startOnMount: false });
    const countUpRefTwo = useRef();
    const { start: startCountUpTwo } = useCountUp({ ref: countUpRefTwo, end: 200, startOnMount: false });
    const countUpRefThree = useRef();
    const { start: startCountUpThree } = useCountUp({ ref: countUpRefThree, end: 300, startOnMount: false });
    const countUpRefFour = useRef();
    const { start: startCountUpFour } = useCountUp({ ref: countUpRefFour, end: 400, startOnMount: false });

    useEffect(() => {
      const controller = new ScrollMagic.Controller();
      const elements = document.querySelectorAll('.outrun-container, .outrun-image');
      elements.forEach((element) => {
        new ScrollMagic.Scene({ triggerElement: element, triggerHook: 0.9 })
          .setClassToggle(element, 'visible')
          .addTo(controller);
      });

      new ScrollMagic.Scene({ triggerElement: ".outrun-container:nth-child(1)", triggerHook: 0.9 })
        .on('enter', () => { setStartAnimation((prev) => ({ ...prev, one: true })); startCountUpOne(); })
        .addTo(controller);

      new ScrollMagic.Scene({ triggerElement: ".outrun-container:nth-child(2)", triggerHook: 0.9 })
        .on('enter', () => { setStartAnimation((prev) => ({ ...prev, two: true })); startCountUpTwo(); })
        .addTo(controller);

      new ScrollMagic.Scene({ triggerElement: ".outrun-container:nth-child(3)", triggerHook: 0.9 })
        .on('enter', () => { setStartAnimation((prev) => ({ ...prev, three: true })); startCountUpThree(); })
        .addTo(controller);

      new ScrollMagic.Scene({ triggerElement: ".outrun-container:nth-child(4)", triggerHook: 0.9 })
        .on('enter', () => { setStartAnimation((prev) => ({ ...prev, four: true })); startCountUpFour(); })
        .addTo(controller);

      gsap.set("#outSvg", { y: 100, x: 0 });
      gsap.set("#outAnim1", { y: 0, x: 1000 });
      gsap.set("#outAnim2", { y: 0, x: 1000 });
      gsap.set("#outAnim3", { y: 0, x: 0 });
      gsap.set("#outAnim4", { y: 1000, x: 0 });


      const timeline = gsap.timeline({ ease: "none" });
      timeline.to("#outSvg", { y: 0, x: 0 }, 0);
      timeline.to("#outAnim1", { y: 0, x: 0 }, 0);
      timeline.to("#outAnim2", { y: 0, x: 0 }, 0);
      timeline.to("#outAnim3", { y: 110, x: 140 }, 0);
      timeline.to("#outAnim4", { y: 0, x: 0 }, 0);


      new ScrollMagic.Scene({ triggerElement: "#outSvg", duration: 200 })
        .setTween(timeline)
        .addTo(controller);
    }, []);
  
    
    return (
        <div className="outrun" id="Resources">
            <div className="container">
                <div className="title">Outrun Your Competitors with AI-Driven Scalability and Enhanced Functionality</div>
                <div className="outrun-content">
                    <div className="outrun-column">
                        <div className="outrun-container">
                            <div className="outrun-container-image">
                                <img src={iconOne} alt="" />
                            </div>
                            <div className="outrun-container-wrap">
                                <div className="outrun-container-title">
                                    Outperform in Functionality by <b>  <CountUp end={startAnimation.one ? 35 : 0} />%</b>:
                                </div>
                                <div className="outrun-container-text">Supercharge your product with AI integrations that elevate user experience and add value—making you the preferred choice in the market.</div>
                            </div>
                        </div>
                        <div className="outrun-container">
                            <div className="outrun-container-image">
                                <img src={iconSecond} alt="" />
                            </div>
                            <div className="outrun-container-wrap">
                                <div className="outrun-container-title">
                                    Overtake Competitors by <b><CountUp end={startAnimation.two ? 30 : 0} />%</b>:
                                </div>
                                <div className="outrun-container-text">Incorporate AI-driven functionalities that are not just innovative but also unique, setting you leagues ahead of the competition.</div>
                            </div>
                        </div>
                        <div className="outrun-container">
                            <div className="outrun-container-image">
                                <img src={iconThird} alt="" />
                            </div>
                            <div className="outrun-container-wrap">
                                <div className="outrun-container-title">
                                    Rapidly Scale by <b><CountUp end={startAnimation.three ? 25 : 0} />%</b> Faster:
                                </div>
                                <div className="outrun-container-text">Utilize AI to streamline and expedite your scaling processes, allowing you to grow faster and more efficiently than ever before.</div>
                            </div>
                        </div>
                        <div className="outrun-container">
                            <div className="outrun-container-image">
                                <img src={iconFour} alt="" />
                            </div>
                            <div className="outrun-container-wrap">
                                <div className="outrun-container-title">
                                    Cut Scaling Costs by <b> <CountUp end={startAnimation.four ? 20 : 0} />%</b>:
                                </div>
                                <div className="outrun-container-text">Implement AI solutions that are not only effective but also cost-efficient, making your scaling phase more sustainable and profitable.</div>
                            </div>
                        </div>
                    </div>
                    <div  id="outSvg" className="outrun-column">
                    <svg width="729" height="637" viewBox="0 0 729 637" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M727.064 183.006H646.327C595.791 183.006 554.824 142.038 554.824 91.5029V86.1204C554.824 38.5576 593.381 0.000228882 640.944 0.000228882C688.507 0.000228882 727.064 38.5576 727.064 86.1204V183.006Z" fill="url(#pattern0)"/>
<path   id="outAnim1"  d="M727.064 183.006H646.327C595.791 183.006 554.824 142.038 554.824 91.5029V86.1204C554.824 38.5576 593.381 0.000228882 640.944 0.000228882C688.507 0.000228882 727.064 38.5576 727.064 86.1204V183.006Z" fill="#272D4E"/>
<text id="outAnim1" x="580" y="110" fontWeight={900} fontSize={43} fill="#fff">
                    +<CountUp
                    end={startAnimation.two ? 30 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                        />%
                    </text>
<path id="outAnim2" d="M344.009 636.033H673.688C704.158 636.033 728.858 611.333 728.858 580.863C728.858 550.393 704.158 525.692 673.688 525.692H454.35C393.41 525.692 344.009 575.094 344.009 636.033Z" fill="url(#pattern1)"/>
<path id="outAnim2" d="M344.009 636.033H673.688C704.158 636.033 728.858 611.333 728.858 580.863C728.858 550.393 704.158 525.692 673.688 525.692H454.35C393.41 525.692 344.009 575.094 344.009 636.033Z" fill="#E5F0FF"/>
<text id="outAnim2" x="460" y="600" fontWeight={900} fontSize={43} fill="#272D4E">
                   +<CountUp
                
                    end={startAnimation.four ? 20 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
                    <text id="outAnim3"  x="-120" y="210" fontWeight={900} fontSize={82} fill="#272D4E"  transform="rotate(-90 0,110)">
                    +<CountUp
                   
                    end={startAnimation.two ? 35 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
<path  id="outAnim4" d="M0 602.866H161.179C262.153 602.866 344.009 521.011 344.009 420.036V409.211C344.009 314.216 267 237.207 172.004 237.207C77.0089 237.207 0 314.216 0 409.211V602.866Z" fill="url(#pattern2)"/>
<path  id="outAnim4" d="M0 602.866H161.179C262.153 602.866 344.009 521.011 344.009 420.036V409.211C344.009 314.216 267 237.207 172.004 237.207C77.0089 237.207 0 314.216 0 409.211V602.866Z" fill="#272D4E"/>
<text id="outAnim4"  x="30" y="570" fontWeight={900} fontSize={70} fill="#fff">
                    +<CountUp
                  
                    end={startAnimation.three ? 25 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use transform="matrix(0.00431034 0 0 0.0040568 0 -0.00101427)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use transform="matrix(0.00431034 0 0 0.0150336 0 -1.35665)"/>
</pattern>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use transform="matrix(0.00431034 0 0 0.00405513 0 -0.000808207)"/>
</pattern>
</defs>
</svg>

                   {/*  <svg  width="729" height="637" viewBox="0 0 729 637" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  id="outAnim1" d="M727.206 183.972H646.468C595.933 183.972 554.966 143.005 554.966 92.4697V87.0872C554.966 39.5244 593.523 0.967026 641.086 0.967026C688.649 0.967026 727.206 39.5244 727.206 87.0872V183.972Z" fill="#272D4E"/>
                    <text id="outAnim1" x="580" y="110" fontWeight={900} fontSize={43} fill="#fff">
                    +<CountUp
                    end={startAnimation.two ? 30 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                        />%
                    </text>
                    <path  id="outAnim2"  d="M344.15 637H673.829C704.299 637 729 612.299 729 581.829C729 551.36 704.299 526.659 673.829 526.659H454.492C393.552 526.659 344.15 576.06 344.15 637Z" fill="#E5F0FF"/>
                    <text id="outAnim2" x="460" y="600" fontWeight={900} fontSize={43} fill="#272D4E">
                   +<CountUp
                
                    end={startAnimation.four ? 20 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
                    <text id="outAnim3"  x="-120" y="210" fontWeight={900} fontSize={82} fill="#272D4E"  transform="rotate(-90 0,110)">
                    +<CountUp
                   
                    end={startAnimation.two ? 35 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
                    <path id="outAnim4" d="M0.141724 603.833H161.321C262.295 603.833 344.15 521.977 344.15 421.003V410.178C344.15 315.183 267.141 238.174 172.146 238.174C77.1507 238.174 0.141724 315.182 0.141724 410.178V603.833Z" fill="#272D4E"/>
                    <text id="outAnim4"  x="30" y="570" fontWeight={900} fontSize={70} fill="#fff">
                    +<CountUp
                  
                    end={startAnimation.three ? 25 : 0}
                    children={({ countUpRef }) => <tspan ref={countUpRef}></tspan>}
                    />%
                    </text>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use transform="matrix(0.00431034 0 0 0.0040568 0 -0.00101427)"/>
                    </pattern>
                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use transform="matrix(0.00431034 0 0 0.0150336 0 -1.35665)"/>
                    </pattern>
                    <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use transform="matrix(0.00431034 0 0 0.00405513 0 -0.000808207)"/>
                    </pattern>
                    </defs>
                    </svg> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outrun;

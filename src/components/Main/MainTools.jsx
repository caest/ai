import React from 'react';
import Tool from './Tool';
import iconOne from './iconOne.svg';
import iconSecond from './iconSecond.webp';
import iconThird from './iconThird.webp';
import iconFour from './iconFour.webp';
import iconFive from './iconFive.webp';

const MainTools = () => {
  const tools = [
    { src: iconOne, alt: 'Icon One Description' },
    { src: iconSecond, alt: 'Icon Two Description' },
    { src: iconThird, alt: 'Icon third Description' },
    { src: iconFour, alt: 'Icon four Description' },
    { src: iconFive, alt: 'Icon five Description' },
    
  ];

  return (
    <div className="main-tools">
      {tools.map(tool => (
        <Tool key={tool.alt} {...tool} />
      ))}
    </div>
  );
};

export default MainTools;

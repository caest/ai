import React from 'react';
import videoFile from './video.mp4';

const Video = () => {
  return (
    <video className="development-video" loop autoPlay muted
           src={videoFile}>
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

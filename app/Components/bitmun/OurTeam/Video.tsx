import React from 'react';
import './video.css';

const Video: React.FC = () => {
  const videoSource = 'https://www.youtube.com/embed/g01J3JZ9nMs?si=Q6VSm23zABPszSwC';

  return (
    <div>
      <h1>BITMUN Aftermovie</h1>
      <iframe width="1200vh" height="1200vh" display="flex" justify-content="center"align-items="center" src="https://www.youtube.com/embed/g01J3JZ9nMs?si=Q6VSm23zABPszSwC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default Video;

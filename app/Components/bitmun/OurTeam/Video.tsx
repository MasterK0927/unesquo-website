import React from 'react';
import './video.css';

const Video: React.FC = () => {
  const videoSource = 'https://www.youtube.com/embed/g01J3JZ9nMs?si=Q6VSm23zABPszSwC';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        width="85%"
        height="500px"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={videoSource}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

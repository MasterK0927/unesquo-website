import React, { useEffect,useState } from 'react';
import styles from './video.module.css';

function Video() {

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Function to play the video
    const playVideo = () => {
      const videoElement = document.getElementById('autoplayVideo') as HTMLVideoElement;
      if (videoElement) {
        videoElement.play();
      }
    };

    // Event listener to play the video when the component mounts
    window.addEventListener('load', playVideo);

    // Event listener to play/pause the video when scrolling
    window.addEventListener('scroll', videoScroll);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('load', playVideo);
      window.removeEventListener('scroll', videoScroll);
    };
  }, []);

  // Function to handle video play/pause based on scroll
  function videoScroll() {
    const videoElement = document.getElementById('autoplayVideo') as HTMLVideoElement;
    if (videoElement) {
      const windowHeight = window.innerHeight;
      const videoHeight = videoElement.clientHeight;
      const videoClientRect = videoElement.getBoundingClientRect();

      if (
        videoClientRect.top <= windowHeight - videoHeight * 0.5 &&
        videoClientRect.top >= 0 - videoHeight * 0.5
      ) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }
  const handleToggleMute = () => {
    const videoElement = document.getElementById('autoplayVideo') as HTMLVideoElement;

    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <div className={styles.video_wrap}>
        <video
          id="autoplayVideo"
          className={styles.video}
          autoPlay
          muted={isMuted}
          playsInline
          poster="http://placehold.it/350x350"
        >
          <source src="bitmun.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className={styles.muteToggle} onClick={handleToggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </div>
      </div>
    </div>
  );
}

export default Video;

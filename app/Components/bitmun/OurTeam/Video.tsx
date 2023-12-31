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
          poster='https://scontent.fccu13-2.fna.fbcdn.net/v/t39.30808-6/306843302_463685125799498_6440379255570587761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JGFG2aQq-50AX8DcNGf&_nc_ht=scontent.fccu13-2.fna&oh=00_AfCv5XXOBU53vGipi1CgjFXy6Tqx3DSKcLDneXAvMPq_qQ&oe=6581FA1B'
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

import React, { useEffect } from 'react';
import styles from './video.module.css';

function Video() {
  useEffect(() => {
    window.addEventListener('load', videoScroll);
    window.addEventListener('scroll', videoScroll);

    return () => {
      window.removeEventListener('load', videoScroll);
      window.removeEventListener('scroll', videoScroll);
    };
  }, []);

  function videoScroll() {
    const videoElements = document.querySelectorAll('video[autoplay]');
    if (videoElements.length > 0) {
      const windowHeight: number = window.innerHeight;
  
      for (let i = 0; i < videoElements.length; i++) {
        const thisVideoElement = videoElements[i] as HTMLVideoElement;
        const videoHeight: number = thisVideoElement.clientHeight;
        const videoClientRect: DOMRect = thisVideoElement.getBoundingClientRect();
  
        if (
          videoClientRect.top <= windowHeight - videoHeight * 0.5 &&
          videoClientRect.top >= 0 - videoHeight * 0.5
        ) {
          thisVideoElement.play();
        } else {
          thisVideoElement.pause();
        }
      }
    }
  }

  return (
    <div>
      <div className={styles.video_wrap}>
        <video className={styles.video} autoPlay muted playsInline loop poster="http://placehold.it/350x350">
          <source src="bitmun.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
}

export default Video;

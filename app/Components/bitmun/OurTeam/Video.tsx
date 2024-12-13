import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './video.module.css';

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer for autoplay and pause
  useEffect(() => {
    const currentVideoRef = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideoRef?.play().catch(error => console.error('Autoplay failed:', error));
            setIsPlaying(true);
          } else {
            currentVideoRef?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  // Toggle Mute Handler
  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Toggle Play/Pause
  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(error => console.error('Play failed:', error));
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
      className={styles.videoContainer}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        className={styles.videoWrapper}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          id="autoplayVideo"
          poster='https://scontent.fccu13-2.fna.fbcdn.net/v/t39.30808-6/306843302_463685125799498_6440379255570587761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JGFG2aQq-50AX8DcNGf&_nc_ht=scontent.fccu13-2.fna&oh=00_AfCv5XXOBU53vGipi1CgjFXy6Tqx3DSKcLDneXAvMPq_qQ&oe=6581FA1B'
          className={styles.video}
          autoPlay
          muted={isMuted}
          playsInline
        >
          <source src="bitmun.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Control Overlay */}
        <div className={styles.controlsContainer}>
          {/* Mute Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleMute}
            className={styles.muteToggle}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </motion.button>

          {/* Play/Pause Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleTogglePlay}
            className={styles.playToggle}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer;
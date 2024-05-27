import React, { useEffect, useRef } from 'react';
import styles from './FarewellBanner.module.css';
import {useRouter} from 'next/navigation';

const FarewellBanner: React.FC = () => {
    const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const currentYear = new Date().getFullYear();
    const yearsPassed = currentYear - 2020;

    // Create a canvas and draw text on it
    const canvas = document.createElement('canvas');
    console.log(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = 650;
    canvas.height = 200;
    canvas.style.width = '650px';
    canvas.style.height = '200px';

    if (ctx) {
      // Fill the canvas
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the text
      ctx.font = 'Bold 30px sans-serif';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = '#25b18e';
      ctx.fillText(`  ${yearsPassed} years`, 15, 50);
      ctx.fillStyle = '#515dd2';
      ctx.fillText(
        'of good vibes, FAREWELL Seniors',
        15 + ctx.measureText(`${yearsPassed} years `).width + 20,
        50
      );

      // Convert the canvas to an image
      const img = new Image();
      console.log(img);
      img.src = canvas.toDataURL();

      // Wait for the image to load
      img.onload = () => {
        const banner = document.getElementById('banner');
        if (banner) {
          // Clear existing banner content
          banner.innerHTML = '';
          for (let i = 0; i < 33; i++) {
            const segment = document.createElement('div');
            segment.className = styles.segment;
            segment.style.animationDelay = `${i * 0.1}s`;
            segment.style.backgroundImage = `url(${img.src})`;
            segment.style.backgroundPositionX = `${-20 * i}px`;
            banner.appendChild(segment);
          }
        } else {
          console.error('Banner element not found');
        }
      };
    } else {
      console.error('Canvas context not found');
    }

    // Mark as initialized
    initialized.current = true;
  }, []);

  const handleAircraftClick = () => {
    const aircraft = document.querySelector(`.${styles.aircraft}`);
    const propeller = document.querySelector(`.${styles.propeller}`);
    if (aircraft && propeller) {
      aircraft.classList.add(styles.flyAway);
      propeller.classList.add(styles.flyAway);
      setTimeout(() => {
        router.push('/farewell');
      }, 3000);
    }
  };

  return (
    <div className={styles.aircraftBanner}>
      <div className={styles.propeller}></div>
      <div className={styles.aircraft} onClick={handleAircraftClick}></div>
      <div className={styles.banner} id="banner"></div>
    </div>
  );
};

export default FarewellBanner;

'use client'
import React, { useState, useEffect } from 'react';
import DotDisplay from '../Components/dots/DotDisplay';
import GenesisLanding from '../Components/Genesis/landing/Landing';
import styles from '../styles/genesis.module.css';
import EventOne from '../Components/Genesis/event1/EventOne';
import EventTwo from '../Components/Genesis/event2/EventTwo';
import EventThree from '../Components/Genesis/event3/EventThree';
import EventFour from '../Components/Genesis/event4/EventFour';
import EventFive from '../Components/Genesis/event5/EventFive';

const components: React.FC[] = [
  GenesisLanding,
  EventOne,
  EventTwo,
  EventThree,
  EventFour,
  EventFive,
];

const SCROLL_THRESHOLD = 100;
const TOUCH_SENSITIVITY = 50;

const Genesis: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleDotClick = (dotNumber: number) => {
    console.log(`Dot ${dotNumber} clicked`);
    setActiveIndex(dotNumber - 1);
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > SCROLL_THRESHOLD && activeIndex > 0) {
        // Scroll up
        setActiveIndex((prevIndex) => prevIndex - 1);
      } else if (e.deltaY < -SCROLL_THRESHOLD && activeIndex < components.length - 1) {
        // Scroll down
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Store the initial touch position
      const startY = e.touches[0].clientY;

      const handleTouchMove = (e: TouchEvent) => {
        // Calculate the vertical distance traveled
        const deltaY = e.touches[0].clientY - startY;

        if (deltaY > TOUCH_SENSITIVITY && activeIndex > 0) {
          // Scroll up
          setActiveIndex((prevIndex) => prevIndex - 1);
        } else if (deltaY < -TOUCH_SENSITIVITY && activeIndex < components.length - 1) {
          // Scroll down
          setActiveIndex((prevIndex) => prevIndex + 1);
        }
      };

      const handleTouchEnd = () => {
        // Remove touch move and touch end event listeners
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };

      // Attach touch move and touch end event listeners
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    };

    // Attach the appropriate event listeners based on device type
    if ('ontouchstart' in window) {
      // Touchscreen device
      window.addEventListener('touchstart', handleTouchStart);
    } else {
      // Non-touchscreen device
      window.addEventListener('wheel', handleScroll);
    }

    return () => {
      // Clean up the event listeners when the component unmounts
      if ('ontouchstart' in window) {
        window.removeEventListener('touchstart', handleTouchStart);
      } else {
        window.removeEventListener('wheel', handleScroll);
      }
    };
  }, [activeIndex]);

  const ActiveComponent = components[activeIndex];

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <DotDisplay activeDot={activeIndex + 1} onDotClick={handleDotClick} />
      </div>
      <ActiveComponent />
    </div>
  );
};

export default Genesis;

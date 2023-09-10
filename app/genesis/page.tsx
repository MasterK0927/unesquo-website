"use client"
import React, { useState } from 'react';
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

const Genesis: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleDotClick = (dotNumber: number) => {
    console.log(`Dot ${dotNumber} clicked`);
    setActiveIndex(dotNumber - 1);
  };

  const handleNextButtonClick = () => {
    const nextIndex = (activeIndex + 1) % components.length;
    setActiveIndex(nextIndex);
  };
  
  


  const handlePrevButtonClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const ActiveComponent = components[activeIndex];

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <DotDisplay activeDot={activeIndex + 1} onDotClick={handleDotClick} />
      </div>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrevButtonClick}
          disabled={activeIndex === 0}
        >
          &lt; {/* Left arrow */}
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNextButtonClick}
          disabled={activeIndex === components.length - 1}
        >
          &gt; {/* Right arrow */}
        </button>
      <ActiveComponent />
    </div>
  );
};

export default Genesis;

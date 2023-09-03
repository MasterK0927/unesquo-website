import React from 'react';
import styles from './DotDisplay.module.css';

interface DotDisplayProps {
  activeDot: number;
  onDotClick: (dotNumber: number) => void;
}

const DotDisplay: React.FC<DotDisplayProps> = ({ activeDot, onDotClick }) => {
  const handleClick = (dotNumber: number) => {
    console.log(`Clicked dot ${dotNumber}`);
    onDotClick(dotNumber);
  };

  return (
    <div className={styles.dotDisplay}>
      {[1, 2, 3, 4, 5, 6].map((dotNumber) => (
        <div
          key={dotNumber}
          className={`${styles.dot} ${dotNumber === activeDot ? styles.active : ''}`}
          onClick={() => handleClick(dotNumber)}
        >
          {dotNumber}
        </div>
      ))}
    </div>
  );
};

export default DotDisplay;

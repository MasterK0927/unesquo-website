import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number; // Initial time in seconds
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    // Update the timer every second
    timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(remainingSeconds).padStart(2, '0')}s`;
  };

  return (
    <div style={{ textAlign: 'center', margin: '5px', border: '1px solid white', borderRadius: '5px', padding: '10px' }}>
      <h2 style={{ fontFamily: 'Serif', color: '#E4931D', fontSize: '5em' }}>BITMUN 24'</h2>
      <h6 style={{ fontFamily: 'Serif', color: 'white', fontSize: '2em' }}>Overcoming Differences</h6>
      <div style={{ fontFamily: 'Serif', fontSize: '3em', fontWeight: 'semibold', padding: '5px', borderRadius: '5px', marginTop: '5px', display: 'inline-block', boxShadow: '0 0 10px rgba(5, 5, 0, 0.1)' }}>
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Timer;

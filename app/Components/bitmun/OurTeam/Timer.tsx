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

    return (
      <div className="timer-items">
        <div className="timer-item">{String(days).padStart(2, '0')}d</div>
        <div className="timer-item">{String(hours).padStart(2, '0')}h</div>
        <div className="timer-item">{String(minutes).padStart(2, '0')}m</div>
        <div className="timer-item">{String(remainingSeconds).padStart(2, '0')}s</div>
        <style jsx>
          {`
            .timer-items {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 10px;
            }
            .timer-item {
              font-size: 3em;
              font-weight: semibold;
              padding: 5px;
              border-radius: 5px;
              margin: 5px;
              display: flex;
              box-shadow: 2px 2px 10px red, -2px -2px 10px red, 2px -2px 10px red, -2px 2px 10px rgba(5, 5, 0, 0.1), 0 0 10px rgba(5, 5, 0, 0.1), inset 0 0 10px rgba(5, 5, 0, 0.1);
              background: rgba(192, 192, 192, 0.2);
              backdrop-filter: blur(10px);
            }
    
            @media (max-width: 1000px) {
              .timer-item {
                font-size: 1.5em;
                font-weight: semibold;
                padding: 5px;
                border-radius: 5px;
                margin: 5px;
                display: flex;
                box-shadow: 2px 2px 10px red, -2px -2px 10px red, 2px -2px 10px red, -2px 2px 10px rgba(5, 5, 0, 0.1), 0 0 10px rgba(5, 5, 0, 0.1), inset 0 0 10px rgba(5, 5, 0, 0.1);
                background: rgba(192, 192, 192, 0.2);
                backdrop-filter: blur(10px);
              }
    
              .timer-item {
                margin: 0 5px;
              }
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <div className="timer-container">
      <h2 className="timer-heading">BITMUN 24'</h2>
      <h6 className="timer-subheading">Overcoming Differences</h6>
      {formatTime(time)}
      <style jsx>{`
        .timer-container {
          text-align: center;
          margin: 5px;
          border-radius: 15px;
          padding: 20px 20px 40px 20px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .timer-heading {
          font-family: 'Calibri', sans-serif;
          color: #E4931D;
          font-size: 5em;
          margin-bottom: 10px;
        }

        .timer-subheading {
          font-family: 'Calibri', sans-serif;
          color: white;
          font-size: 2em;
          margin-bottom: 20px;
        }

        @media (max-width: 1000px) {
          .timer-heading {
            font-family: 'Calibri', sans-serif;
            color: #E4931D;
            font-size: 3.5em;
            margin-bottom: 10px;
          }

          .timer-subheading {
            font-family: 'Calibri', sans-serif;
            color: white;
            font-size: 1.5em;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Timer;

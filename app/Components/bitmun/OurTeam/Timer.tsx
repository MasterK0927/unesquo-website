import React, { useState, useEffect } from 'react';

interface TimerProps {
  targetTime: string; // Target time in the format 'YYYY-MM-DDTHH:mm:ss'
}

const Timer: React.FC<TimerProps> = ({ targetTime }) => {
  const [time, setTime] = useState(calculateTimeDifference());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(calculateTimeDifference());
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  function calculateTimeDifference() {
    const targetDate = new Date(targetTime);
    const currentDate = new Date();

    let timeDifference = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);

    if (timeDifference < 0) {
      timeDifference = 0;
    }

    return timeDifference;
  }

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
              box-shadow: 2px 2px 10px white, -2px -2px 10px white, 2px -2px 10px white, -2px 2px 10px rgba(5, 5, 0, 0.1), 0 0 10px rgba(5, 5, 0, 0.1), inset 0 0 10px rgba(5, 5, 0, 0.1);
              background: black;
            }
    
            @media (max-width: 1000px) {
              .timer-item {
                font-size: 1.5em;
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
      <h2 className="timer-heading">BITMUN 25'</h2>
      <h6 className="timer-subheading">Overcoming Differences</h6>
      {formatTime(time)}
      <h4 className='date-container'>18-19 January</h4>
      <style jsx>{`
        .date-container {
        margin-top: 20px;
        font-family: 'Arial', sans-serif;
        font-size: 1.4em;
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(90deg, #ffcc00, #e4931d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        padding: 10px 15px;
        border-radius: 8px;
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: inline-block;
        text-align: center;
      }
        .timer-container {
          text-align: center;
          margin: 5px 5px 15px 5px;
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
          font-family: 'serif';
          color: #ffcc00;
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

          .timer-items {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }

          .timer-item {
            font-size: 1.5em;
            font-weight: semibold;
            padding: 5px;
            border-radius: 5px;
            margin: 5px;
            display: flex;
            box-shadow: 2px 2px 10px white, -2px -2px 10px white, 2px -2px 10px white, -2px 2px 10px rgba(5, 5, 0, 0.1), 0 0 10px rgba(5, 5, 0, 0.1), inset 0 0 10px rgba(5, 5, 0, 0.1);
            background: black;
          }
        }
      `}</style>
    </div>
  );
};

export default Timer;

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface TimerProps {
  targetTime: string;
}

const shineAnimation = keyframes`
  0% {
    background-position: -100% 0;
  }
  40%, 100% {
    background-position: 200% 0;
  }
`;

const Container = styled(motion.div)`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    min-height: 20vh;
    padding: 0.5rem;
  }
`;

const TimerCard = styled(motion.div)`
  background: linear-gradient(
    135deg, 
    rgba(33, 33, 50, 0.9), 
    rgba(20, 20, 40, 0.95)
  );
  border-radius: 24px;
  padding: 2rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 100, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100vw;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 95vw;
    gap: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 6rem;
  margin: 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  letter-spacing: 2px;
  animation: ${shineAnimation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #9699b0;
  margin: 0;
  font-weight: bold;
  text-shadow: 0 0 1.25px rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TimeUnitsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TimeValue = styled(motion.div)`
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 12px;
  min-width: 100px;
  text-align: center;
  color: #8b5cf6;
  font-size: 4rem;
  font-weight: bold;
  font-family: monospace;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    min-width: 70px;
  }
`;

const TimeLabel = styled.span`
  color: #9699b0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const TimerExpired = styled.div`
  font-size: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Timer = ({ targetTime }: TimerProps) => {
  const [time, setTime] = useState(calculateTimeDifference());
  const [isExpired, setIsExpired] = useState(false);

  function calculateTimeDifference() {
    const targetDate = new Date(targetTime);
    const currentDate = new Date();
    let timeDifference = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);
    return Math.max(0, timeDifference);
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeDifference();
      setTime(remainingTime);
      
      if (remainingTime <= 0) {
        setIsExpired(true);
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  if (isExpired) {
    return (
      <Container>
        <TimerCard>
          <TimerExpired>Event Has Started!</TimerExpired>
        </TimerCard>
      </Container>
    );
  }

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <TimerCard>
        <Title variants={itemVariants}>
          BITMUN 25'
        </Title>
        <Subtitle variants={itemVariants}>
          Overcoming Differences
        </Subtitle>
        <TimeUnitsContainer>
          {timeUnits.map(({ value, label }) => (
            <TimeUnit key={label}>
              <AnimatePresence mode="wait">
                <TimeValue
                  key={value}
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {String(value).padStart(2, '0')}
                </TimeValue>
              </AnimatePresence>
              <TimeLabel>{label}</TimeLabel>
            </TimeUnit>
          ))}
        </TimeUnitsContainer>
      </TimerCard>
    </Container>
  );
};

export default Timer;
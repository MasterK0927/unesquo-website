import React, { useState, useEffect, useContext, FC } from 'react';
import { CardContainer, Time, Title, Description } from './StylesComp';
import { IntervalContext } from './TimelineComponent';

interface Event {
  id: string;
  time: string; // Adjust the type based on your actual data structure
  title: string; // Adjust the type based on your actual data structure
  description: string; // Adjust the type based on your actual data structure
}

interface CardProps {
  event: Event;
  isOnLeft: boolean;
}

const Card: FC<CardProps> = ({ event, isOnLeft, ...restProps }) => {
    const { tick } = useContext(IntervalContext) || { tick: 0 };
    const [verPos, setVerPos] = useState<number>(-17);
  
    useEffect(() => {
      setVerPos((prev) => prev + 10);
    }, [tick]);
  
    return (
      <CardContainer verPos={verPos} isOnLeft={isOnLeft}>
        <Time>
          <span>{event.time}</span>
        </Time>
        <Title>{event.title}</Title>
        <Description>{event.description}</Description>
      </CardContainer>
    );
  };
  

export default Card;

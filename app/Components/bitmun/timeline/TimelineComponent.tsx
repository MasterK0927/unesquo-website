import React, { useState, useEffect, createContext, FC } from 'react';
import Card from './Card';
import TimelineMark from './Mark';
import { Container } from './StylesComp';

interface Event {
  id: string;
  time: string;
  title: string;
  description: string;
  // Add other properties based on your actual Event type
}

interface VerticalTimelineProps {
  events: Event[];
  interval?: number;
}

interface IntervalContextProps {
  tick: number;
}

const IntervalContext = createContext<IntervalContextProps | undefined>(undefined);

const VerticalTimeline: FC<VerticalTimelineProps> = ({ events, interval, ...restProps }) => {
  const [tick, setTick] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [time, setTime] = useState(3000);
  const [isOnLeft, setIsOnLeft] = useState(true);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [marks, setMarks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    events &&
      setTimeout(() => {
        setIsOnLeft((prev) => !prev);
        setMarks((prev) => [
          <TimelineMark key={events[tick].id} />,
          ...prev.slice(0, 5),
        ]);
        setCards((prev) => [
          <Card key={events[tick].id} isOnLeft={isOnLeft} event={events[tick]} />,
          ...prev.slice(0, 5),
        ]);
        setTick((prev) => (prev < events.length - 1 ? prev + 1 : 0));
      }, time);

    if (isFirstLoad) {
      setTime(Math.max(3000, interval || 0));
      setIsFirstLoad(false);
    }
  }, [tick, events, interval, isFirstLoad, isOnLeft, time]);

  return (
    <IntervalContext.Provider value={{ tick }}>
      <Container {...restProps}>
        {cards}
        {marks}
      </Container>
    </IntervalContext.Provider>
  );
};

export { IntervalContext };
export default VerticalTimeline;

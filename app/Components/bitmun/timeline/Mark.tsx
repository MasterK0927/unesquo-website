import React, { useState, useEffect, useContext, FC } from 'react';
import { Mark } from './StylesComp';
import { IntervalContext } from './TimelineComponent';

interface TimelineMarkProps {}

const TimelineMark: FC<TimelineMarkProps> = ({ ...restProps }) => {
    const { tick } = useContext(IntervalContext) || { tick: 0 };
    const [verPos, setVerPos] = useState<number>(-15);
  
    useEffect(() => {
      setVerPos((prev) => prev + 10);
    }, [tick]);
  
    return <Mark verPos={verPos} {...restProps} />;
  };
  
  export default TimelineMark;
  

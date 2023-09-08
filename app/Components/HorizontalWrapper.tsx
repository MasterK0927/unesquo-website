"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: number;
  height: string;
}

function HorizontalWrapper({ children, direction, height }: Props) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
 
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  
  
  
  const [shouldAnimate, setShouldAnimate] = useState(true);

  
  useEffect(() => {
    const handleResize = () => {
      setShouldAnimate(window.innerWidth > 1280px);
      console.log(window.innerWidth);
    };

   
    handleResize();
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);


  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef} >
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: shouldAnimate?xTransform:0 ,
        }}
        
      >
      
          {children}
      
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;

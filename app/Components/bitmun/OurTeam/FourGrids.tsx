import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

interface GridProps {
  content: string;
  imageUrl?: string;
}

const GridContainer = styled(motion.div)`
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 90vh;
  height: 60vh;
  background: linear-gradient(
    135deg, 
    rgba(33, 33, 50, 0.9), 
    rgba(20, 20, 40, 0.95)
  );
  border-radius: 16px;
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.3),
    0 5px 15px rgba(255,255,255,0.05);
  transition: all 0.3s ease;
  margin: 15px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 
      0 15px 40px rgba(0,0,0,0.5),
      0 5px 20px rgba(255,255,255,0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin: 10px 0;
  }
`;

const GridImage = styled(motion.img)`
  max-width: 100%;
  max-height: 70vh;
  object-fit: cover;
  margin-bottom: 10px;
  loading: lazy;
  border-radius: 12px;
  transition: transform 0.3s ease;
  filter: brightness(0.9) contrast(1.1);

  ${GridContainer}:hover & {
    transform: scale(1.05);
    filter: brightness(1) contrast(1.2);
  }
`;

const GridText = styled(motion.p)`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  color: #e0e0e0;
  line-height: 1.6;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FourGridsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #0a0a0a;
  padding: 40px 20px;
  gap: 20px;
`;

const Grid: React.FC<GridProps> = ({ content, imageUrl }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <GridContainer
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.95
      }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50,
        scale: isInView ? 1 : 0.95
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }}
    >
      {imageUrl && (
        <GridImage 
          src={imageUrl} 
          alt="Grid Image"
          initial={{ 
            opacity: 0, 
            scale: 0.9
          }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : 0.9
          }}
          transition={{ 
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.2
          }}
        />
      )}
      {content && (
        <GridText
          initial={{ 
            opacity: 0, 
            y: 20
          }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 20
          }}
          transition={{ 
            type: "spring",
            stiffness: 90,
            damping: 10,
            delay: 0.4
          }}
        >
          {content}
        </GridText>
      )}
    </GridContainer>
  );
};

const FourGridsSection: React.FC = () => {
  return (
    <FourGridsContainer>
      <Grid imageUrl="images/IMG_1648.webp" content="" />
      <Grid
        content="Welcome to BITMUN, an immersive Model United Nations experience that delves into the heart of international diplomacy. BITMUN provides a platform for students to engage in diplomatic discourse, foster critical thinking, and develop a nuanced understanding of global issues."
      />
      <Grid
        content="BITMUN empowers students to step into the shoes of international diplomats, fostering critical thinking, negotiation skills, and a deep understanding of global challenges."
      />
      <Grid imageUrl="images/_MG_9409.webp" content="" />
    </FourGridsContainer>
  );
};

export default FourGridsSection;
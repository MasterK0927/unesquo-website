import React from 'react';
import styled from 'styled-components';

interface GridProps {
  content: string;
  imageUrl?: string;
}

const GridContainer = styled.div`
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 80vh;
  height: 60vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

const GridImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: cover;
  margin-bottom: 10px;
`;

const GridText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid: React.FC<GridProps> = ({ content, imageUrl }) => {
  return (
    <GridContainer>
      {imageUrl && <GridImage src={imageUrl} alt="Grid Image" />}
      <GridText>{content}</GridText>
    </GridContainer>
  );
};

const FourGridsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FourGridsSection: React.FC = () => {
  return (
    <FourGridsContainer>
      <Grid imageUrl="images/IMG_1648.webp" content="" />

      <Grid
        content="Welcome to BITMUN, an immersive Model United Nations experience that delves into the heart of international diplomacy. BITMUN provides a platform for students to engage in diplomatic discourse, foster critical thinking, and develop a nuanced understanding of global issues."
      />
      <Grid
        content="Welcome to BITMUN, an immersive Model United Nations experience that delves into the heart of international diplomacy. BITMUN provides a platform for students to engage in diplomatic discourse, foster critical thinking, and develop a nuanced understanding of global issues."
      />
      <Grid imageUrl="images/_MG_9409.webp" content="" />

    </FourGridsContainer>
  );
};

export default FourGridsSection;

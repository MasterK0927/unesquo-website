import React from 'react';

interface GridProps {
  content: string;
  imageUrl?: string;
}

const Grid: React.FC<GridProps> = ({ content, imageUrl }) => {
  const gridStyles: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: imageUrl ? 'auto' : '70vh',
    height: imageUrl ? 'auto' : '70vh',
  };

  const textStyles: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '25px',
  };

  return (
    <div style={gridStyles}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Grid Image"
          style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'cover', marginBottom: '10px' }}
        />
      )}
      <p style={textStyles}>{content}</p>
    </div>
  );
};

const FourGridsSection: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Grid  imageUrl="images/IMG_1648.jpg" />

        <Grid
          content="Welcome to BITMUN, an immersive Model United Nations experience that delves into the heart of international diplomacy. BITMUN provides a platform for students to engage in diplomatic discourse, foster critical thinking, and develop a nuanced understanding of global issues."
        />
        <Grid content="Welcome to BITMUN, an immersive Model United Nations experience that delves into the heart of international diplomacy. BITMUN provides a platform for students to engage in diplomatic discourse, foster critical thinking, and develop a nuanced understanding of global issues."  />

        <Grid
         imageUrl="images/_MG_9409.jpg"
        />
      </div>
    </div>
  );
};

export default FourGridsSection;

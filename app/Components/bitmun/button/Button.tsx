import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  name: string;
  background: string;
  color: string;
  border: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 15px 25px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 7px 20px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg, 
      transparent, 
      rgba(255,255,255,0.3), 
      transparent
    );
    transition: all 0.6s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;

const Button: React.FC<ButtonProps> = ({ 
  name, 
  background, 
  color, 
  border, 
  icon, 
  onClick 
}) => {
  return (
    <StyledButton
      style={{ 
        background, 
        color, 
        border 
      }}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <ButtonContent>
        <IconWrapper>{icon}</IconWrapper>
        {name}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
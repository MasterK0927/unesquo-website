"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { FaRocket } from "react-icons/fa";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
}

function Button({
  name,
  icon,
  background = "linear-gradient(45deg, #f2994a, #f2c94c)",
  color = "#fff",
  border = "1px solid #f2994a",
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      style={{
        background: background,
        color: color,
        border: border,
      }}
      onClick={onClick}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

const backgroundColorAnimation = keyframes`
  0% {
    background: #f2994a;
  }
  50% {
    background: #f2c94c;
  }
  100% {
    background: #f2994a;
  }
`;

const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-size: 200% 200%;
  animation: ${backgroundColorAnimation} 2s ease infinite;
  &:hover {
    transform: scale(1.05);
    color: white;
  }
`;

export default Button;

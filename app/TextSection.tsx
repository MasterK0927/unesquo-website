"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text} >
      <motion.p className="events-text" style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <h1 className="heading">
        EVENTS
      </h1>
      <TextWrapper>
        Just A Min.
      </TextWrapper>
      <TextWrapper>
        LAMEST QUIZ.
      </TextWrapper>
      <TextWrapper>
        PYRAMID.
      </TextWrapper>
      <TextWrapper>
        BIZTECH QUIZ.
      </TextWrapper>
      <TextWrapper>
        MORE THAN MONOLOGUES.
      </TextWrapper>
      <TextWrapper>
        SPENT QUIZ.
      </TextWrapper>
      <TextWrapper>
        TURNCOAT DEBATE.
      </TextWrapper>
      <TextWrapper>
        MELAS QUIZ
      </TextWrapper>
      <TextWrapper>
        SPIN A STORY
      </TextWrapper>
      <TextWrapper>
        GENERAL QUIZ
      </TextWrapper>
      <TextWrapper>
        PARLIAMENTARY DEBATE.
      </TextWrapper>
      <TextWrapper>
        ATM QUIZ.
      </TextWrapper>
      <TextWrapper>
        THREESOME IN A BOAT.
      </TextWrapper>
      <TextWrapper>
        MUSIC DAY QUIZ.
      </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  .heading{
    font-size: 10rem;
  }

  @media screen and (max-width: 1280px) {
    .heading{
      font-size:4rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    .events-text{
      font-size: 2rem !important;
      font-weight: bold;
      width: 20rem !important;
      margin: auto ;
      text-align: center;
    }
  }
`;

export default TextSection;

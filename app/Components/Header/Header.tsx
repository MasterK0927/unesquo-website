"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const recruitment = () => {
  alert("Coming Soon!");
}

function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setShouldAnimate(window.innerWidth > 1280);
    };


    handleResize();
    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  const home = () => {
    window.location.href = "/";
  };

  return (
    <HeaderStyled ref={hero}>
      <nav className="navbar">
        <div className="logo">
          <Image src={logo} alt="logo" width={50} className="brand-logo" />
          <h2 className="brand">UNESQUO</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-items ${isMenuOpen ? "open" : "close"}`}>
          <li>
            <a href="" onClick={home}>Home</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li className="button genesis-button">
            <a className="button__StyledButton-sc-18iddzu-1 ixHxFg wrapper_special" href="/genesis"
              rel="noreferrer noopener">
              <div className="btn special"><div className="text">Genesis</div><svg width="79" height="46" viewBox="0 0 79 46"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_618_1123)">
                  <path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path>
                </g>
                <defs>
                  <filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.6"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0.05"></stop>
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Lorem, ipsem, lorem ipsem lorem ipsem.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia alias necessitatibus provident, iusto explicabo voluptatum reprehenderit, pariatur cumque illum architecto ipsa asperiores? Similique accusamus, fuga maiores quod totam culpa!
          </p>
          <div className="buttons">
            <div className="recruitment" onClick={recruitment}>
              <Button
                name="Recruitment"
                background="#f2994a"
                color="#fff"
                border="1px solid #f2994a"
                icon={<FaRocket />}
              />
            </div>
            <Button name="About us" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: shouldAnimate ? imageHover.transform : "none",
            }}
          >
            <Image
              src="/images/monkey.png"
              className="monkey"
              width={600}
              height={600}
              alt="hero"
              style={{
                transform: shouldAnimate ? imageHover.transform : "none",
              }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.1s ease-in-out;

        .ixHxFg {
          display: inline-block;
          max-width: 100%;
          height: 40px;
          transition: all 0.1s ease 0s;
        }
          .btn {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 10rem;
            height: 3rem;
            border: none;
            border-radius: 2px;
            clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px);
            color: rgb(23, 15, 30);
            overflow: hidden;
            padding: 0px 0px 10px 5px;
            text-decoration: none;
            transition: all 0.2s ease 0s;
          }

          .text{
            position: absolute;
            font-family: "JetBrains Mono", monospace;
            font-size: 20px;
            font-weight: bold;
            top: calc(25%);
            left: calc(25%);
          }

          .ixHxFg .special {
            filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
            color: rgb(23, 15, 30);
            animation: 2s ease 0s infinite alternate none running jNbght;
            background: linear-gradient(90deg, rgb(255, 215, 77) 0%, rgb(64, 221, 255) 30%, rgb(124, 127, 255) 85%) 0% 0% / 200% 100%;
          }

          .special:hover {
            transform: rotate(2deg);
            border: 1px solid rgb(124, 127, 255);
          }
        
          @keyframes jNbght {
            0% {
                background-position: 10% 10%;
            }
            50% {
                background-position: 0% 0%;
            }
            100% {
                background-position: 100% 100%;
            }
          }

          .ixHxFg:not(:disabled):hover {
            filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
          }
        
        .ixHxFg:not(:disabled) {
            cursor: pointer;
          }
        
        .ixHxFg.wrapper_special {
            filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
          }
        }
      }
      li:hover {
        transform: scale(1.1);
        transition: all 0.2s;
      }
    }

    a:hover,
    a:focus {
      color: rgb(124, 127, 255);
    }

    a {
      color: rgb(64, 221, 255);
      transition: color 0.2s ease 0s;
    }

    a {
      color: inherit;
      text-decoration: none;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .nav-items{
      padding: 0%;
      font-size: 1rem;
      margin: 0;
    }
    .logo{
      font-size: 1rem;
    }
    .navbar{
      padding : 1rem !important;
      justify-content: space-between !important;
    }
    .brand{
      font-size: 1.8rem;
    }
    .brand-logo{
      width: 2rem !important;
      height: 2rem !important;
    }
    .special{
      width: 6rem !important;
      height: 2.4rem !important;
      
    }
    .text{
      margin-left: -0.8rem !important;
    }
    
    
    .nav-items {
      display: none;
    }
    
    .menu-icon {
      visibility: visible;
      display: block;
      cursor: pointer;
      font-size: 1.5rem;
      color: white;
      padding: 1rem;
    }

    .nav-items {
      display: none;
      position: absolute;
      top: 5rem;
      left: 0;
      width: 100%;
      background-color: #111111;
      text-align: center;
      padding-bottom: 0.7rem;
      padding-top: 0.5rem;
      z-index: 10;
    }

    .nav-items.open {
      display: flex;
      flex-direction: column;
    }

    .nav-items.close{
      visibility: hidden;
      width: 0 !important;
    }

    .nav-items.open li {
      margin: 1rem 0;
    }
    
    .nav-items.open a {
      color: white;
    }

    .nav-items a {
      padding: 1.3rem ; 
      border-bottom: 1px solid rgba(254, 254, 254, 0.345); 
    }


    .button__StyledButton-sc-18iddzu-1{
      border-bottom: none !important;
    }

    .genesis-button{
      margin-top: 0 !important;
    }
     
    .header-content{
      flex-direction: column-reverse;
      padding: 5rem 1rem !important;
    }

    .image-content{
      padding-top: 3rem !important;
      
    }

    .monkey{  
      
      width: 21rem !important;
      height: 21rem !important;
      z-index: 0 !important;
    }
    .text-content{
      width: 23rem;
      align-items: center;
      position: center;
      text-align: center;
    }
    
  }
`;

export default Header;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import styled from "styled-components";

function NavBar() {
  const hero = useRef<HTMLDivElement>(null);

  const home = () => {
    window.location.href = "/";
  };

  return (
    <HeaderStyled ref={hero}>
      <nav className="navbar">
        <div className="logo">
          <Image src={logo} alt="logo" width={50} className="brand-logo" />
          <h2>UNESQUO</h2>
        </div>
        <ul className="nav-items">
          <li>
            <a onClick={home}>Home</a>
          </li>
          <li>
            <a href="/#events">Events</a>
          </li>
          <li className="button ">
            <a className="button__StyledButton-sc-18iddzu-1 ixHxFg wrapper_special" href="/genesis" rel="noreferrer noopener">
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
        transition: all 0.2s ease-in-out;

        .ixHxFg {
          display: inline-block;
          max-width: 100%;
          height: 40px;
          transition: all 0.2s ease 0s;
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
`;
export default NavBar;
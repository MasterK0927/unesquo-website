"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/bitmun.svg";
import styled from "styled-components";

function NavBar() {
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


    return (
        <HeaderStyled ref={hero}>
            <nav className="navbar">
                <div className="logo">
                    <Image src={logo} alt="logo" width={70} className="brand-logo" />
                    <h2 className="brand">BITMUN</h2>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={`nav-items ${isMenuOpen ? "open" : "close"}`}>
                    <li>
                        <a href="/bitmun">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/bitmun/events">Events</a>
                    </li>
                    <li>
                        <a href="/bitmun/about">About Us</a>
                    </li>
                    <li>
                        <a href="/bitmun/ourTeam" >Our Team</a>
                    </li>
                    <li>
                        <a href="/bitmun/contact">Contact Us</a>
                    </li>
                </ul>
            </nav>

        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem 0 4rem;
    min-height: 10vh;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      cursor: pointer;

      .brand-logo{
        margin-top: 2rem;
        transform: scale(1.4);
      }
      .brand{
        font-size: 2rem;
        font-weight: 700;
        color: white;
        font-family: "Poppins", sans-serif;
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 1.2rem;
      li {
        padding:0.75rem 0.75rem;
        border-radius: 0.5rem;
        }
      }
      li:hover {
        border: 1px solid var(--color-border);
        background: linear-gradient(45deg, #ff8c00, #ffd700);;
        color: black;
      }
    }

    a {
      color: rgb(64, 221, 255);
    }

    a {
      color: inherit;
      text-decoration: none;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }
  }

 
  @media screen and (max-width: 1280px) {
    
    .nav-items{
      padding: 0%;
      font-size: 1rem;
      margin: 0;
    }
    .navbar{
      padding : 0rem 2rem !important;
      justify-content: space-between !important;
    }
    .brand{
      font-size: 1.8rem;
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
      top: 7rem;
      left: 0;
      width: 100%;
      background:linear-gradient(to right, #0f0c29, #302b63, #24243e);
      text-align: center;
      padding-bottom: 0.7rem;
      padding-top: 0.5rem;
      z-index: 10;
    }

    .nav-items.open {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .nav-items.close{
      visibility: hidden;
      width: 0 !important;
    }

    .nav-items.open li {
      margin: 0.4rem 0;
    }
    
    .nav-items.open a {
      color: whitesmoke;
    }

    .nav-items a {
      padding: 1.2rem 0 ;
      border-bottom: 1.25px solid rgba(254, 254, 254, 0.345); 
    }


    .button__StyledButton-sc-18iddzu-1{
      border-bottom: none !important;
    }

    .genesis-button{
      margin-top: 0 !important;
    }
  }
`;

export default NavBar;

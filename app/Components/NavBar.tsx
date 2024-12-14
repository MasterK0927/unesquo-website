"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/bitmun.svg";
import unstop from "../../public/unstop.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        style={{
          backgroundColor: scrollPosition > 50 ? "rgba(26, 26, 26, 0.95)" : "#1a1a1a"
        }}
      >
        <motion.a 
          href="/bitmun"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="logo">
            <motion.div 
              className="unesquo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image src={logo} alt="logo" width={70} className="brand-logo" />
              <motion.h2 
                className="brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                BITMUN
              </motion.h2>
            </motion.div>
            <motion.div 
              className="unstop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="brand_unstop">Powered by</h2>
              <Image src={unstop} alt="logo" width={40} className="brand-logo-unstop" />
            </motion.div>
          </div>
        </motion.a>

        <motion.button 
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </motion.button>

        <AnimatePresence>
          {(shouldAnimate || isMenuOpen) && (
            <motion.ul
              className={`nav-items ${isMenuOpen ? "open" : "close"}`}
              initial={shouldAnimate ? { opacity: 0, x: 50 } : { opacity: 0, y: -20 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {["Collaborations", "Committees", "About Us", "Our Team", "Contact Us"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: "#ff8c00" }}
                >
                  <a href={`/bitmun/${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
        135deg, 
        rgba(33, 33, 50, 0.9), 
        rgba(20, 20, 40, 0.95)
      );
    color: #fff;
    position: fixed;
    width: 99%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    border-radius: 0 0 20px 20px;

    .logo {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      cursor: pointer;

      .unesquo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
      }

      .unstop {
        width: fit-content;
        gap: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 95px;

        .brand_unstop {
          font-size: 0.8rem;
          font-weight: 700;
          color: #ccc;
          font-family: "Poppins", sans-serif;
        }

        .brand-logo-unstop {
          transform: scale(2);
          margin-top: -0.5rem;
        }
      }

      .brand-logo {
        margin-top: 2rem;
        transform: scale(1.4);
      }
      
      .brand {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        font-family: "Poppins", sans-serif;
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 1.2rem;
      list-style: none;

      li {
        padding: 0.75rem 0.75rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease-in-out;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ff8c00, #ffd700);
          transition: width 0.3s ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    a {
      color: #40ddff;
      text-decoration: none;
      width: max-content;
    }

    .menu-icon {
      display: none;
      cursor: pointer;
      font-size: 2rem;
      color: #40ddff;
      background-color: transparent;
      border: none;
      transition: transform 0.3s ease-in-out;

      &.open {
        transform: rotate(90deg);
      }
    }
  }

  @media screen and (max-width: 1280px) {
    nav {
      padding: 0 2rem !important;
      justify-content: space-between !important;
      background: linear-gradient(
        135deg, 
        rgba(33, 33, 50, 0.9), 
        rgba(20, 20, 40, 0.95)
      );
    }

    .nav-items {
      padding: 0;
      font-size: 1rem;
      margin: 0;
    }

    .brand {
      font-size: 1.5rem !important;
    }

    .unstop {
      gap: 1rem !important;
    }

    .brand-logo-unstop {
      transform: scale(1.5) !important;
      margin-top: 0 !important;
    }

    .menu-icon {
      display: block !important;
      visibility: visible !important;
      z-index: 100;
    }

    .nav-items {
      display: none;
      position: absolute;
      top: 7.2rem;
      left: 0;
      width: 100%;
      background: linear-gradient(
        135deg, 
        rgba(33, 33, 50, 0.9), 
        rgba(20, 20, 40, 0.95)
      );
      text-align: center;
      padding-bottom: 0.7rem;
      padding-top: 0.5rem;
      z-index: 10;
      border-radius: 0 0 20px 20px;

      &.open {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      &.close {
        display: none;
      }

      li {
        margin: 0.4rem 0;
        
        a {
          padding: 1.2rem 0;
          color: #fff;
          display: block;
        }
      }
    }
  }
`;

export default NavBar;

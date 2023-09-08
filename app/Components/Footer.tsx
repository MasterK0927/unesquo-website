"use client";

import React from "react";
import styled from "styled-components";
import logo from "/public/logo.png";
import footer from "../utils/footer";
import Image from "next/image";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <FooterStyled>
      <nav className="nav">
        <div className="logo-con">
          <div className="logo">
            <Image src={logo} width={36} alt="logo" />
            <h2>UNESQUO, BIT Mesra</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi, laudantium voluptate non necessitatibus asperiores fugit animi praesentium placeat similique.
          </p>
          <div className="socials">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="links">
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li key={index}>
                        <a href="">{text.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="rights">
        <a href="">©2023 UNESQUO All rights reserved.</a>
      </p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 5rem 10rem 0 10rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);

  .nav {
    width: 100vw;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    .logo-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50%;

      .socials {
        display: flex;
        gap: 1rem;
        font-size: 1.6rem;
        svg {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: white;
          }
        }
      }
    }

    .logo-con .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .links {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      h4 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }

      li:not(:last-child) {
        margin-bottom: 1rem;
      }

      a {
        transition: all 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }

  .rights {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid var(--color-border);
  }

  @media screen and (max-width: 768px) {
    
    padding: 1rem !important;
    
    .nav{
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 100;
      width: 100%;
    }
    .logo-con{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: auto;
    }
    .logo{
      justify-content: center;
    }
    .socials{
      justify-content: center;
    }
    .links{
      margin: auto;
      text-align: center;
    }
  }
`;

export default Footer;

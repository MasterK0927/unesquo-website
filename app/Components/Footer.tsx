"use client";

import React from "react";
import styled from "styled-components";
import logo from "/public/logo.png";
import footer from "../utils/footer";
import Image from "next/image";

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

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
          The United Engineers' Speaking & Quizzing Organization is the official quizzing and oratory body of BIT Mesra. The club is led by top- tier orators, debaters and quizzers who feel that erudition and confidence are two essential elements of one's persona that must be nurtured in order to be cornerstones to a prosperous future.
          </p>
          <div className="socials">
           <Link href="/"> <AiFillTwitterCircle /></Link>
           <Link href="https://www.instagram.com/unesquo/"> <AiFillInstagram /></Link>
           <Link href="/"> <BsDiscord /></Link>
           <Link href="https://www.linkedin.com/company/unesquo-bit-mesra/"> <AiFillLinkedin /></Link>
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
      grid-template-columns: repeat(2, 0.3fr);
      gap: 1rem;
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

  @media screen and (max-width: 1280px) {
    
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

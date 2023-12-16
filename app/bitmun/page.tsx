"use client"
import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Timer from '../Components/bitmun/OurTeam/Timer';
import ChairPage from '../Components/bitmun/OurTeam/ChairData';
import FourGridsSection from '../Components/bitmun/OurTeam/FourGrids';
import ExampleUsage from '../Components/bitmun/OurTeam/ExampleUsage';
import ExampleUsage1 from '../Components/bitmun/OurTeam/ExampleUsage1';
import Video from '../Components/bitmun/OurTeam/Video';
import styles from './OurTeam.module.css'

const initialTime = 399600;

const Bitmun = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div ><NavBar /></div>
      <div ><Timer initialTime={initialTime} /></div>
      <div ><Video /></div>
      <br />
      <div className={styles.fourGrid}><FourGridsSection /></div>
      <section className={styles.section} >
        <div className={styles.ExampleUsage}><ExampleUsage /></div>
        <div className={styles.ExampleUsage1}><ExampleUsage1 /></div>
      </section>
      <div style={{ margin: '20px 0' }}><ChairPage /></div>
      <div style={{ margin: '200px 0' }}><Footer /></div>
    </div>
  );
};

export default Bitmun;

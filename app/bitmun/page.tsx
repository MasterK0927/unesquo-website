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

const initialTime = 399600;

const Bitmun = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={{ margin: '20px 0' }}><NavBar /></div>
      <div style={{ margin: '20px 0' }}><Timer initialTime={initialTime}/></div>
      <div style={{ margin: '200px 0' }}><Video /></div>
      <br />
      <div style={{ margin: '200px 0' }}><FourGridsSection /></div>
      <section style={{ margin: '200px 0' }}>
        <div style={{ margin: '200px 0' }}><ExampleUsage /></div>
        <div style={{ margin: '20px 0' }}><ExampleUsage1 /></div>
      </section>
      <div style={{ margin: '20px 0' }}><ChairPage /></div>
      <div style={{ margin: '200px 0' }}><Footer /></div>
    </div>
  );
};

export default Bitmun;

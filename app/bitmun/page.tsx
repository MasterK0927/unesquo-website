"use client"
import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import FourGrids from '../Components/bitmun/OurTeam/FourGrids';
import Timer from '../Components/bitmun/OurTeam/Timer';

const Bitmun = () => {
  const initialTime = 300;

  return (
    <div>
      <NavBar />
      <Timer initialTime={initialTime} />
      <FourGrids />
      <Footer />
    </div>
  );
};

export default Bitmun;

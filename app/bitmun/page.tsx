"use client"
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Timer from '../Components/bitmun/OurTeam/Timer'
import  ChairPage from '../Components/bitmun/OurTeam/ChairData'
import FourGridsSection from '../Components/bitmun/OurTeam/FourGrids'



const initialTime = 3600;

const Bitmun = () => {

  return (
    <div>
        <NavBar />
        <Timer initialTime={initialTime}/>
        <ChairPage />
        <FourGridsSection />
        <Footer />
    </div>
  );
};

export default Bitmun;

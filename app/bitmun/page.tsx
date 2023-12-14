"use client"
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Timer from '../Components/bitmun/OurTeam/Timer'
import ChairPage from '../Components/bitmun/OurTeam/ChairData'
import FourGridsSection from '../Components/bitmun/OurTeam/FourGrids'
import ExampleUsage from '../Components/bitmun/OurTeam/ExampleUsage'
import ExampleUsage1 from '../Components/bitmun/OurTeam/ExampleUsage1'
import Video from '../Components/bitmun/OurTeam/Video'

const initialTime = 3600;

const Bitmun = () => {

  return (
    <div>
        <NavBar />
        <Timer initialTime={initialTime}/>
        <FourGridsSection />
        <br />
        <Video />
        <ExampleUsage />
        <ExampleUsage1 />
        <ChairPage />
        <Footer />
    </div>
  );
};

export default Bitmun;

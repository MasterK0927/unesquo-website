"use client"
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Itinerary from '../Components/bitmun/OurTeam/Itinerary'
import Timer from '../Components/bitmun/OurTeam/Timer'

const Bitmun = () => {
 

  return (
    <div>
        <NavBar />
        <Timer />
        <Itinerary />
        <Footer />
    </div>
  );
};

export default Bitmun;

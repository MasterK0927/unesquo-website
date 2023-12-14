"use client"
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Timer from '../Components/bitmun/OurTeam/Timer'
import Itinerary from '../Components/bitmun/OurTeam/Itinerary'

const itineraryData = [
  {
    id: 1,
    src: '/images/smoke_2.png',
    name: 'Chair1',
    position: 'Chair UNGA',
  },
  {
    id: 2,
    src: '/images/smoke_2.png',
    name: 'Shaurya Singh',
    position: 'ViceChair UNGA',
  },
  {
    id: 3,
    src: '/images/smoke_2.png',
    name: 'Someone',
    position: 'Rappeuter',
  },
];

const initialTime = 3600;

const Bitmun = () => {

  return (
    <div>
        <NavBar />
        <Timer initialTime={initialTime}/>
        <Itinerary itineraryData={itineraryData} />
        <Footer />
    </div>
  );
};

export default Bitmun;

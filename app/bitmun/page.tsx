"use client"
import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Timer from '../Components/bitmun/OurTeam/Timer'
<<<<<<< HEAD
import  ChairPage from '../Components/bitmun/OurTeam/ChairData'


=======
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
>>>>>>> 2dca3271ccafc67e583549793a5148e19dc1c6bc

const initialTime = 3600;

const Bitmun = () => {

  return (
    <div>
        <NavBar />
        <Timer initialTime={initialTime}/>
<<<<<<< HEAD
        <ChairPage />
=======
        <Itinerary itineraryData={itineraryData} />
>>>>>>> 2dca3271ccafc67e583549793a5148e19dc1c6bc
        <Footer />
    </div>
  );
};

export default Bitmun;

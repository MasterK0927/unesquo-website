import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Chairs from '../Components/bitmun/OurTeam/ChairsComponent'


const Bitmun = () => {
  const initialTime = 300;

  return (
    <div>
        <NavBar />
        <Chairs />
        <Footer />
    </div>
  );
};

export default Bitmun;

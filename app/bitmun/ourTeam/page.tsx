import React from 'react'
import Footer from '@/app/Components/Footer'
import NavBar from '@/app/Components/NavBar'
import TeamBITMUNPage from '@/app/Components/bitmun/OurTeam/TeamBITMUNData'

const Bitmun = () => {
  return (
    <div>
        <NavBar/>
        <TeamBITMUNPage/>
        <Footer/>
    </div>
  )
}

export default Bitmun
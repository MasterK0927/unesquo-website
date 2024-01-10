'use client'
import React from 'react'
import Footer from '@/app/Components/Footer'
import NavBar from '@/app/Components/NavBar'
import CollaboratorsPage from '@/app/Components/bitmun/OurTeam/CollaboratorsData'

const Bitmun = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <div><NavBar/></div>
        <CollaboratorsPage/>
        <Footer/>
    </div>
  )
}

export default Bitmun
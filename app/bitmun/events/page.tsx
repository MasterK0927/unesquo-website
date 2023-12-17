'use client'
import React from 'react'
import Footer from '@/app/Components/Footer'
import NavBar from '@/app/Components/NavBar'
import EventPage from '@/app/Components/bitmun/events/EventPage'


const Event = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <div><NavBar /></div>
            <EventPage />
            <div><Footer /></div>
        </div>
    )
}

export default Event;
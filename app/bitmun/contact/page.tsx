'use client'
import React from 'react'
import Footer from '@/app/Components/Footer'
import NavBar from '@/app/Components/NavBar'
import ContactUs from '@/app/Components/bitmun/contact/ContactUsForm'

const Contact = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <div><NavBar/></div>
        <ContactUs/>
        <div><Footer/></div>
    </div>
  )
}

export default Contact
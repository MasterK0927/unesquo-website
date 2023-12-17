'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Timer from '../Components/bitmun/OurTeam/Timer';
import ChairPage from '../Components/bitmun/OurTeam/ChairData';
import FourGridsSection from '../Components/bitmun/OurTeam/FourGrids';
import ExampleUsage from '../Components/bitmun/OurTeam/ExampleUsage';
import ExampleUsage1 from '../Components/bitmun/OurTeam/ExampleUsage1';
import Video from '../Components/bitmun/OurTeam/Video';
import styles from './OurTeam.module.css';
import Preloader from '../Components/preloader/preloader';

const initialTime = 2977200;

const Bitmun = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data)
    const loadData = async () => {
      // Simulate loading for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false); // Set loading to false after 2 seconds
    };

    loadData();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {loading && <Preloader />}
      {!loading && (
        <>
          <div><NavBar /></div>
          <div><Timer initialTime={initialTime} /></div>
          <div><Video /></div>
          <br />
          <div className={styles.fourGrid}><FourGridsSection /></div>
          <section className={styles.section} >
            <div className={styles.ExampleUsage}><ExampleUsage /></div>
            <div className={styles.ExampleUsage1}><ExampleUsage1 /></div>
          </section>
          <div style={{ margin: '20px 0' }}><ChairPage /></div>
          <div><Footer /></div>
        </>
      )}
    </div>
  );
};

export default Bitmun;

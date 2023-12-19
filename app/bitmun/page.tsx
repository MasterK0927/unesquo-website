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
import Preloader from '../Components/preloader/preloader';
import styles from './OurTeam.module.css';

// Set your target time in the format 'YYYY-MM-DDTHH:mm:ss'
const targetTime = '2024-01-20T08:00:00';

const Bitmun = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data)
    const loadData = async () => {
      try {
        // Simulate loading for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false); // Set loading to false after 2 seconds
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false); // Handle error by setting loading to false
      }
    };

    loadData();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {loading && <Preloader />}
      {!loading && (
        <>
          <NavBar />
          {/* Pass targetTime instead of initialTime */}
          <Timer targetTime={targetTime} />
          <Video />
          <br />
          <div className={styles.fourGrid}>
            <FourGridsSection />
          </div>
          <section className={styles.section}>
            <div className={styles.ExampleUsage}>
              <ExampleUsage />
            </div>
            <div className={styles.ExampleUsage1}>
              <ExampleUsage1 />
            </div>
          </section>
          <div style={{ margin: '20px 0' }}>
            <ChairPage />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Bitmun;

"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './FarewellLanding.module.css';
import anime from 'animejs';
import Image from 'next/image';
import image from '../../../public/OIP (17).jpeg';
import { useRouter } from 'next/navigation';
import unesquoLogo from '../../../public/logo.png';

const FarewellLanding: React.FC = () => {
  const route = useRouter();
  const gridRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState(Array(14).fill(image));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (gridRef.current) {
      anime.timeline()
        .add({
          targets: gridRef.current.children,
          translateY: [100, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: anime.stagger(150)
        })
        .add({
          targets: gridRef.current.children,
          scale: [0.8, 1],
          easing: 'easeOutElastic(1, .8)',
          duration: 750,
          delay: anime.stagger(100, { start: 500 })
        });
    }
  }, [images]);

  const loadMoreImages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setImages((prevImages) => [...prevImages, ...Array(10).fill(image)]);
      setLoading(false);
    }, 1000);
  };

  const handleImageClick = (index: number) => {
    setLoading(true);
    const slug = `memory-${index + 1}`;
    setTimeout(() => {
      setLoading(false);
      route.push(`/farewell/${slug}`);
    }, 3000);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.rippleTextContainer}>
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className={styles.rippleText}
              style={{
                '--random-x': `${Math.random() * 100 - 50}vw`,
                '--random-y': `${Math.random() * 100 - 50}vh`,
              } as React.CSSProperties}
            >
              UNESQUO
            </span>
          ))}
        </div>
        <div className={styles.finalLogoContainer}>
          <Image src={unesquoLogo} alt="UNESQUO Logo" className={styles.finalLogo} />
          <p className={styles.finalText}>BIT MESRA</p>
        </div>
      </div>
    );
  }


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Farewell Wall</h1>
        <p className={styles.subtitle}>Celebrating Memories of Our Graduates</p>
      </header>
      <div className={styles.gridContainer} ref={gridRef}>
        {images.map((src, index) => (
          <div key={index}  onClick={() => handleImageClick(index)} className={`${styles.gridItem} ${index % 5 === 0 ? styles.gridItemLarge : ''}`}>
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.aircraftIcon}>✈️</span>
                <h2 className={styles.h2}>Flight {index + 1}</h2>
                <p className={styles.p}>Enjoyed the view from above the clouds.</p>
              </div>
            </div>
            <Image src={src} alt={`Memory ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.bottomSection}>
        <button onClick={loadMoreImages} className={styles.loadMoreButton} disabled={loading}>
          {loading ? 'Loading...' : 'Load More Memories'}
        </button>
        <footer className={styles.footer}>
          <p className={styles.p}>Thank you for being part of our journey. Best wishes for your future endeavors!</p>
        </footer>
      </div>
    </div>
  );
};

export default FarewellLanding;

"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './FarewellLanding.module.css';
import anime from 'animejs';
import Image from 'next/image';
import unesquoLogo from '../../../public/logo.png';
import image from '../../../public/OIP (17).jpeg';
import ProfileComponent from '../../Components/farewellProfile/ProfileComponent'; // Import the profile component

type Person = {
  src: StaticImageData;
  name: string;
  slug: string;
  skills: string[];
  description: string;
};

const initialImages: Person[] = [
  { src: image, name: 'Arpan', slug: 'memory-1', skills: ['Skill 1', 'Skill 2'], description: 'Description for Arpan' },
  { src: image, name: 'Person 2', slug: 'memory-2', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 2' },
  { src: image, name: 'Person 3', slug: 'memory-3', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 3' },
  { src: image, name: 'Person 4', slug: 'memory-4', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 4' },
  { src: image, name: 'Person 5', slug: 'memory-5', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 5' },
  { src: image, name: 'Person 6', slug: 'memory-6', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 6' },
  { src: image, name: 'Person 7', slug: 'memory-7', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 7' },
  { src: image, name: 'Person 8', slug: 'memory-8', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 8' },
  { src: image, name: 'Person 9', slug: 'memory-9', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 9' },
  { src: image, name: 'Person 10', slug: 'memory-10', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 10' },
  { src: image, name: 'Person 11', slug: 'memory-11', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 11' },
  { src: image, name: 'Person 12', slug: 'memory-12', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 12' },
  { src: image, name: 'Person 13', slug: 'memory-13', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 13' },
  { src: image, name: 'Person 14', slug: 'memory-14', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 14' },
  { src: image, name: 'Person 15', slug: 'memory-15', skills: ['Skill 1', 'Skill 2'], description: 'Description for Person 15' },
];

const FarewellLanding: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<Person[]>(initialImages);
  const [loading, setLoading] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

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
      const newImages: Person[] = Array(10).fill({
        src: image,
        name: 'New Person',
        slug: 'new-memory',
        skills: ['Skill 1', 'Skill 2'],
        description: 'Description for New Person',
      });
      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
    }, 1000);
  };

  const handleImageClick = (index: number) => {
    setLoading(true);
    const person = images[index];
    setTimeout(() => {
      setLoading(false);
      setSelectedPerson(person);
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
        {images.map((person, index) => (
          <div key={index} onClick={() => handleImageClick(index)} className={`${styles.gridItem} ${index % 5 === 0 ? styles.gridItemLarge : ''}`}>
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.aircraftIcon}>✈️</span>
                <h2 className={styles.h2}>Flight {index + 1}</h2>
                <p className={styles.p}>Enjoyed the view from above the clouds.</p>
              </div>
            </div>
            <Image src={person.src} alt={`Memory ${index + 1}`} className={styles.image} />
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
      {selectedPerson && (
        <div className={styles.profileModal}>
          <ProfileComponent person={selectedPerson} />
          <button onClick={() => setSelectedPerson(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FarewellLanding;

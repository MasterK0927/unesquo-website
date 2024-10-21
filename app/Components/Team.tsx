import React, { useEffect, useState } from 'react';
import styles from '../styles/teamComponents.module.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
}

interface TeamProps {
  teamData: Team[];
}

const CarouselTeam: React.FC<TeamProps> = ({ teamData }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slidesToShow = windowWidth > 1000 ? 3 : 1;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === teamData.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? teamData.length - slidesToShow : prev - 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, isHovered]);

  return (
    <div
      className={styles['alumni-carousel']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={prevSlide}
        className={`${styles['nav-btn']} ${styles['nav-btn-left']}`}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`${styles['nav-btn']} ${styles['nav-btn-right']}`}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
      <div className={styles['carousel-container']}>
        <div
          className={styles['carousel-track']}
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {teamData.map((team, index) => (
            <div
              key={team.id}
              className={`${styles['alumni-item']} ${index >= currentSlide && index < currentSlide + slidesToShow ? styles.active : ''
                }`}
            >
              <div className={styles.cardWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={team.src}
                    alt={`${team.name} - ${team.position}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.alumniImage}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.infoContainer}>
                  <h3 className={styles['alumni-name']}>{team.name}</h3>
                  <div className={styles['alumni-position']}>{team.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['carousel-dots']}>
        {Array.from({ length: teamData.length - (slidesToShow - 1) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`${styles.dot} ${currentSlide === idx ? styles['dot-active'] : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TeamComponent: React.FC<TeamProps> = ({ teamData }) => {
  return (
    <div>
      <h2 className={styles.heading}>Our Team</h2>
      <CarouselTeam teamData={teamData} />
    </div>
  );
};

export default TeamComponent;
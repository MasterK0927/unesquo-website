import React, { useEffect, useState } from 'react';
import styles from '../styles/alumniComponents.module.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Alumni {
    id: number;
    src: string;
    name: string;
    position: string;
}

interface AlumniProps {
    alumniData: Alumni[];
}

const CarouselAlumni: React.FC<AlumniProps> = ({ alumniData }) => {
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
            prev === alumniData.length - slidesToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? alumniData.length - slidesToShow : prev - 1
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
                    {alumniData.map((alumni, index) => (
                        <div
                            key={alumni.id}
                            className={`${styles['alumni-item']} ${index >= currentSlide && index < currentSlide + slidesToShow ? styles.active : ''
                                }`}
                        >
                            <div className={styles.cardWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={alumni.src}
                                        alt={`${alumni.name} - ${alumni.position}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className={styles.alumniImage}
                                    />
                                    <div className={styles.overlay} />
                                </div>
                                <div className={styles.infoContainer}>
                                    <h3 className={styles['alumni-name']}>{alumni.name}</h3>
                                    <div className={styles['alumni-position']}>{alumni.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['carousel-dots']}>
                {Array.from({ length: alumniData.length - (slidesToShow - 1) }).map((_, idx) => (
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
}

const AlumniComponent: React.FC<AlumniProps> = ({ alumniData }) => {
    return (
        <div>
            <h2 className={styles.heading}>Alumni</h2>
            <CarouselAlumni alumniData={alumniData} />
        </div>
    );
};

export default AlumniComponent;

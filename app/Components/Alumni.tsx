import React, { useEffect, useState } from 'react';
import styles from '../styles/alumniComponents.module.css';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

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
    // Use useState to determine the window width on the client side
    const [windowWidth, setWindowWidth] = useState(0);

    // Use useEffect to set the initial window width and update it on window resize
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add an event listener to update the window width on resize
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: windowWidth > 1000 ? 3 : 1,
        slidesToScroll: 1,
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
        <div className={styles["alumni-carousel"]}>
            <Slider {...settings}>
                {alumniData.map((alumni) => (
                    <div key={alumni.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={alumni.src} alt="alumni" width={200} height={225} className={styles['alumniImage']} />
                                <h3 className={styles['alumni-name']}> {alumni.name}</h3>
                                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{alumni.position}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
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

import React, { useEffect, useState } from 'react';
import styles from '../styles/teamComponents.module.css';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  // Use useState to determine the window width on the client side
  const [windowWidth, setWindowWidth] = useState(0);

  // Use useEffect to set the initial window width and update it on window resize
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
        {teamData.map((team) => (
          <div key={team.id} className={styles['alumni-item']}>
            <div className={styles["dpeDzF"]}>
              <div className={styles["content"]}>
                <Image src={team.src} alt="alumni" width={200} height={200} className={styles['alumniImage']} />
                <h3 className={styles['alumni-name']}> {team.name}</h3>
                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{team.position}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const TeamComponent: React.FC<TeamProps> = ({ teamData }) => {
  return (
    <div>
      <h2 className={styles.heading}>Our Team</h2>
      <CarouselTeam teamData={teamData} />
    </div>
  );
};

export default TeamComponent;

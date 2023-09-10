import React, { useEffect, useState } from "react";
import styles from '../styles/alumniComponents.module.css'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

interface Team {
    id: number;
    src: string;
    name: string;
    position: string;
}

interface TeamProps {
    teamData: Team[];
}


const TeamCarousel: React.FC<TeamProps> = ({ teamData }) => {
    const [slidesToShow, setSlidesToShow] = useState(1); 

    useEffect(() => {
      const handleResize = () => {
        const innerWidth = window.innerWidth;
        if (innerWidth >= 900 && innerWidth <= 1280) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(1);
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      pauseOnFocus: true,
      autoplay: true,
      autoplaySpeed: 1400
      };
      return (
        <div className={styles["alumni-carousel"]}>
          <Slider {...settings}>
          {teamData.map((team) => (
                    <div key={team.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={team.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
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


const TeamGrid: React.FC<TeamProps> = ({ teamData }) => {
    return (
        <ul className={styles['alumni-list']}>
                {teamData.map((team) => (
                    <li key={team.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={team.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
                                <h3 className={styles['alumni-name']}> {team.name}</h3>
                                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{team.position}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
    ); 
}

const TeamComponent: React.FC<TeamProps> = ({ teamData }) => {
    
    const [hideCarousel, sethideCarousel] = useState(true);

  
    useEffect(() => {
      const handleResize = () => {
        sethideCarousel(window.innerWidth > 1280);
      };
  
     
      handleResize();
      window.addEventListener("resize", handleResize);
  
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
      
    }, []);
  
    
    return (
        <div>
            <h2 className={styles.heading}>Our Team</h2>
            {hideCarousel? <TeamGrid teamData={teamData} /> : <TeamCarousel teamData={teamData}  />}
        </div>
    );
};

export default TeamComponent;

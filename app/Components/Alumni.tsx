import React, { useEffect, useState } from "react";
import styles from '../styles/alumniComponents.module.css'
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


const AlumniGrid: React.FC<AlumniProps> = ({ alumniData }) => {
    return (
        <div>
            <ul className={styles['alumni-list']}>
                {alumniData.map((alumni) => (
                    <li key={alumni.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={alumni.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
                                <h3 className={styles['alumni-name']}> {alumni.name}</h3>
                                <div className={styles['alumni-position']}><div className={styles['circle']}></div>{alumni.position}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


const CarouselAlumni: React.FC<AlumniProps> = ({ alumniData }) => {
    
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
          {alumniData.map((alumni) => (
                    <div key={alumni.id} className={styles['alumni-item']}>
                        <div className={styles["dpeDzF"]}>
                            <div className={styles["content"]}>
                                <Image src={alumni.src} alt="alumni" width={200} height={200} className={styles['alumniImage']}/>
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
            <h2 className={styles.heading}>Alumni</h2>
            {hideCarousel? <AlumniGrid alumniData={alumniData} /> : <CarouselAlumni alumniData={alumniData}  />}
        </div>
    );
};

export default AlumniComponent;

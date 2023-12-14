import React from 'react';
import styles from './DelegateAffairs.module.css';
import Image from 'next/image';

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
}

interface ItineraryProps {
  itineraryData: Team[];
}


const TeamCard: React.FC<Team> = ({ id, src, name, position }) => {
  return (
    <div key={id} className={styles['alumni-item']}>
      {/* <div className={styles["dpeDzF"]}>
        <div className={styles["content"]}>
          <Image src={src} alt="alumni" width={200} height={225} className={styles['alumniImage']} />
          <h3 className={styles['alumni-name']}>{name}</h3>
          <div className={styles['alumni-position']}>
            {position}
          </div>
        </div>
      </div> */}
      <article className={styles["card"]}>
        <Image
          className={styles["card__background"]}
          src={src}
          alt="Itinerary"
          width={1200}
          height={1400}
        />
        <div className={styles["card__content"]}>
          <div className={styles["card__content--container"]}>
            <h2 className={styles["card__title"]}>{name}</h2>
            <div className={styles["card_description"]}>
              {position}
            </div>
          </div>
          <button className={styles["card__button"]}>Read more</button>
        </div>
      </article>
    </div>
  );
};

const Itinerary: React.FC<ItineraryProps> = ({ itineraryData }) => {
  return (
    <>
<<<<<<< HEAD:app/Components/bitmun/OurTeam/Itinerary.tsx
      <h1 className={styles['heading']}>Itinerary</h1>
=======
<<<<<<<<< Temporary merge branch 1
<<<<<<< HEAD
=======
      <h1 className={styles['heading']}>Itinerary</h1>
>>>>>>> 2dca3271ccafc67e583549793a5148e19dc1c6bc
=========
>>>>>>>>> Temporary merge branch 2
>>>>>>> eaae5b486cd64ffa71734395bd010550bc518e7b:app/Components/bitmun/OurTeam/Unga.tsx
      <div className={styles.teamGrid}>
        <div className={styles.teamCards}>
          {itineraryData.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Itinerary;
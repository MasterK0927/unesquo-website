import React from 'react';
import styles from './DelegateAffairs.module.css';
import Image from 'next/image';

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
}

interface ungaProps {
  ungaData: Team[];
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
          loading='lazy'
        />
        <div className={styles["card__content"]}>
          <div className={styles["card__content--container"]}>
            <h2 className={styles["card__title"]}>{name}</h2>
            <div className={styles["card_description"]}>
              {position}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const Unga: React.FC<ungaProps> = ({ ungaData }) => {
  return (
    <>
      <h1 className={styles['heading']}>UNGA</h1>
      <div className={styles.teamGrid}>
        <div className={styles.teamCards}>
          {ungaData.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Unga;
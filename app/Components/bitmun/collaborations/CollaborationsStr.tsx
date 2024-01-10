import React from 'react';
import styles from '../OurTeam/DelegateAffairs.module.css';
import Image from 'next/image';

interface Team {
  id: number;
  src: string;
  name: string;
}

interface CollaborationStrProps {
  collaboratorsData: Team[];
}


const CollaborationsCard: React.FC<Team> = ({ id, src, name}) => {
  return (
    <div key={id} className={styles['alumni-item']}>
      <article className={styles["card"]}>
        <Image
          className={styles["card__background"]}
          src={src}
          alt="Secreteriat"
          width={1200}
          height={1400}
          loading='lazy'
        />
        <div className={styles["card__content"]}>
          <div className={styles["card__content--container"]}>
            <h2 className={styles["card__title"]}>{name}</h2>
          </div>
        </div>
      </article>
    </div>
  );
};

const Collaborators: React.FC<CollaborationStrProps> = ({ collaboratorsData }) => {
  return (
    <>
      <h1 className={styles['heading']}>Our Collaborators</h1>
      <div className={styles.teamGrid}>
        <div className={styles.teamCards}>
          {collaboratorsData.map((team) => (
            <CollaborationsCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collaborators;
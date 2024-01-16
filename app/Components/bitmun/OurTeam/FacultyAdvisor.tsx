import React from 'react';
import styles from './DelegateAffairs.module.css';
import Image from 'next/image';

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
  buttonSrc: string;
}

interface FacultyAdvisorProps {
  facultyAdvisorData: Team[];
}


const TeamCard: React.FC<Team> = ({ id, src, name, position, buttonSrc }) => {
  return (
    <div key={id} className={styles['alumni-item']}>
      <article className={styles["card"]}>
        <Image
          className={styles["card__background"]}
          src={src}
          alt="Faculty Advisor"
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
          <a href={buttonSrc} target='_blank'><button className={styles["card__button"]}>Read more</button></a>
        </div>
      </article>
    </div>
  );
};

const FacultyAdvisorComponent: React.FC<FacultyAdvisorProps> = ({ facultyAdvisorData }) => {
  return (
    <>
      <h1 className={styles['heading']}>FACULTY ADVISORS</h1>
      <div className={styles.teamGrid}>
        <div className={styles.teamCards}>
          {facultyAdvisorData.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FacultyAdvisorComponent;
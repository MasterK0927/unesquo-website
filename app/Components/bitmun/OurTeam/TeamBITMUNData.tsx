import React from 'react';
import styles from "../../../styles/alumniPage.module.css"
import TeamBITMUNComponent from './TeamBITMUNComponent';

const teamData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Akshay Tripathi',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/penguin.jpeg',
    name: ' Kumar Harshwardhan',
    position: 'Director General',
  },
  {
    id: 4,
    src: '/images/chhavi.jpeg',
    name: 'Chhavi Rani',
    position: 'Deputy Director General',
  },
];

const TeamBITMUNPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <TeamBITMUNComponent teamData={teamData}/>
    </div>
  );
};

export default TeamBITMUNPage;

import React from 'react';
import styles from "../OurTeam/DelegateAffairs.module.css";
import Collaborators from '../collaborations/CollaborationsStr';

const collaboratorsData = [
  {
    id: 1,
    src: '/Collaborations/2025/dublieu_com.jpg',
    name: 'Dublieu',
  },
  {
    id: 2,
    src: '/Collaborations/2025/VJMUN.jpg',
    name: 'VJMUN',
  },
  {
    id: 3,
    src: '/Collaborations/2025/RHETORICA.jpg',
    name: 'Rhetorica',
  },
  {
    id: 4,
    src: '/Collaborations/assembly.png',
    name: 'Assembly of Nations',
  },
  {
    id: 5,
    src: '/Collaborations/juds.jpeg',
    name: 'JUDS',
  },
  {
    id: 6,
    src: '/Collaborations/RTU.jpeg',
    name: 'RTU MUN',
  },
  {
    id: 7,
    src: '/Collaborations/ssuimun2.jpeg',
    name: 'SSUIMUN',
  },
  {
    id: 8,
    src: '/Collaborations/bbsrmun.jpeg',
    name: 'IIT-BBSR MUN',
  },
  {
    id: 9,
    src: '/Collaborations/kgp.jpeg',
    name: 'GMUN IIT-KGP',
  },
];


const CollaboratorsPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Collaborators collaboratorsData={collaboratorsData}/>
    </div>
  );
};

export default CollaboratorsPage;

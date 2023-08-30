import React from 'react';
import AlumniComponent from './Alumni';
import styles from "../styles/alumniPage.module.css"

const alumniData = [
  {
    id: 1,
    src: '/images/prez/prezk21.jpeg',
    name: 'Prajwal Matukumalli',
    position: 'President',
  },
  {
    id: 2,
    src: '/images/jointprez/k21.jpeg',
    name: 'Anushk',
    position: 'Joint President',
  },
  {
    id: 3,
    src: '/images/viceprez/k21-2.jpeg',
    name: ' Manav Raj',
    position: 'Vice President',
  },
  {
    id: 4,
    src: '/images/viceprez/k21.jpeg',
    name: 'Fahim Yousuf Choudhary',
    position: 'Vice President',
  },
  {
    id: 5,
    src: '/images/director/k21.jpeg',
    name: 'Ananya Chaudhary',
    position: 'Director',
  },
  {
    id: 6,
    src: '/images/eventshead/k21.jpeg',
    name: 'Bhavya Hoda',
    position: 'Events Head',
  },
  {
    id: 7,
    src: '/images/masterofpulpit/masterofpulpit.jpeg',
    name: 'Abhik Sen',
    position: 'Master of Pulpit',
  },
  {
    id: 8,
    src: '/images/quizmaster/k21.jpeg',
    name: 'Souvik Dey',
    position: 'Quiz Master',
  },
  {
    id: 9,
    src: '/images/designhead/k21.jpeg',
    name: 'Rooturaj Swain',
    position: 'Design Head',
  },
];

const AlumniPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <AlumniComponent alumniData={alumniData}/>
    </div>
  );
};

export default AlumniPage;

import React from 'react';
import styles from "./DelegateAffairs.module.css";
import Unga from './Unga';
import WarCab from './warCab';
import Mom from './mom';
import Jsip from './jsip';
import Press from './press';

const ungaData = [
  {
    id: 1,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'RAPPEUTER',
  },
];

const warCabData = [
  {
    id: 1,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/tba.jpg',
    name: 'Akshat Raj Sharma',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Rappeuter',
  },
];
const MomData = [
  {
    id: 1,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Rappeuter',
  },
];
const jsipData = [
  {
    id: 1,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/tba,jpg',
    name: 'TBA',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Rappeuter',
  },
];
const pressData = [
  {
    id: 1,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/tba.jpg',
    name: 'TBA',
    position: 'Deputy Secretary General',
  },
];

const ChairPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Unga ungaData={ungaData}/>
      <h1 className={styles['heading']}>War Cabinet</h1>
      <WarCab warCabData={warCabData} />
      <h1 className={styles['heading']}>Ministry Of Magic</h1>
      <Mom MomData={MomData} />
      <h1 className={styles['heading']}>Joint Session Of Indian Parliament</h1>
      <Jsip jsipData={jsipData} />
      <h1 className={styles['heading']}>International Press</h1>
      <Press pressData={pressData} />
    </div>
  );
};

export default ChairPage;

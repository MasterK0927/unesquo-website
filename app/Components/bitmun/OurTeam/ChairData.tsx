import React from 'react';
import styles from "./DelegateAffairs.module.css";
import Unga from './Unga';
import WarCab from './warCab';
import Mom from './Mom';
import Jsip from './jsip';
import Press from './press';

const ungaData = [
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
    src: '/images/akshay.jpeg',
    name: 'Akshay Tripathi',
    position: 'Deputy Secretary General',
  },
];

const warCabData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
];
const MomData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
];
const jsipData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
];
const pressData = [
  {
    id: 1,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'Secretary General',
  },
  {
    id: 2,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
  {
    id: 3,
    src: '/images/akshay.jpeg',
    name: 'Nikhil Verma',
    position: 'Deputy Secretary General',
  },
];

const ChairPage: React.FC = () => {
  return (
    <div className={styles['container']}>
        <h1 className={styles['heading']}>UNGA</h1>
      <Unga ungaData={ungaData} />
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

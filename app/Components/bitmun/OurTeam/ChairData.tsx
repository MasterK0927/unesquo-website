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
    src: '/chair/Aishnit_Yadav.jpg',
    name: 'Aishnit Yadav',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/chair/Diptesh_Banerjee.jpg',
    name: 'Diptesh Banerjee',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/images/webp/Shaurya.webp',
    name: 'Shaurya Singh',
    position: 'RAPPEUTER',
  },
];

const warCabData = [
  {
    id: 1,
    src: '/chair/Pragyan_Sharma.jpeg',
    name: 'Pragyan Sharma',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/chair/Akshat_Raj_Sharma.jpg',
    name: 'Akshat Raj Sharma',
    position: 'VICECHAIR',
  },
];
const MomData = [
  {
    id: 1,
    src: '/images/webp/NikhilVerma.webp',
    name: 'Nikhil Verma',
    position: 'CHAIR',
  },
  {
    id: 2,
    src: '/images/webp/Aayushii.webp',
    name: 'Aayushii Singh',
    position: 'VICECHAIR',
  },
  {
    id: 3,
    src: '/images/webp/tba.webp',
    name: 'Siddhant Jagat',
    position: 'Rappeuter',
  },
];
const jsipData = [
  {
    id: 1,
    src: '/chair/Avyakt_Mishra.jpg',
    name: 'Avyakt Mishra',
    position: 'SPEAKER',
  },
  {
    id: 2,
    src: '/images/webp/Ambuj.webp',
    name: 'Ambuj Mishra',
    position: 'DEPUTY SPEAKER',
  },
];
const pressData = [
  {
    id: 1,
    src: '/chair/Aditya_Dubey.jpg',
    name: 'Aditya Dubey',
    position: 'HEAD',
  },
  {
    id: 2,
    src: '/images/webp/Khushi.webp',
    name: 'Khushi Mandal',
    position: 'EDITOR-IN-CHIEF',
  },
  {
    id: 3,
    src: '/images/webp/Amiya.webp',
    name: 'Amiya Jha',
    position: 'PHOTOGRAPHER-IN-CHIEF',
  },
  {
    id: 4,
    src: '/images/webp/HarshN.webp',
    name: 'Harsh Narayan',
    position: 'HEAD CARICATURIST',
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

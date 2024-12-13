import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./DelegateAffairs.module.css";
import Unga from './Unga';
import WarCab from './warCab';
import Mom from './mom';
import Jsip from './jsip';
import Press from './press';

// Redefine the data directly in the component
const ChairPage: React.FC = () => {
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
      src: '/chair/siddhant.jpeg',
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderSectionTitle = (title: string) => (
    <motion.h2 
      variants={sectionVariants}
      className={styles.sectionTitle}
    >
      {title}
    </motion.h2>
  );

  const renderSectionContent = (SectionComponent: React.ComponentType<any>, data: any[], title: string) => (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className={styles.section}
    >
      {renderSectionTitle(title)}
      <SectionComponent 
        {...(SectionComponent.name === 'Unga' ? { ungaData: data } : 
         SectionComponent.name === 'WarCab' ? { warCabData: data } : 
         SectionComponent.name === 'Mom' ? { MomData: data } : 
         SectionComponent.name === 'Jsip' ? { jsipData: data } : 
         SectionComponent.name === 'Press' ? { pressData: data } : {})}
        className={styles.sectionGrid}
        cardClassName={styles.card}
      />
    </motion.section>
  );

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.mainTitle}>
            BITMUN 24' Chairs
          </h1>
          <p className={styles.subtitle}>
            Celebrating the exceptional leadership driving our diplomatic discourse
          </p>
        </motion.header>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className={styles.sectionsContainer}
        >
          {renderSectionContent(Unga, ungaData, "UNGA")}
          {renderSectionContent(WarCab, warCabData, "War Cabinet")}
          {renderSectionContent(Mom, MomData, "Ministry of Magic")}
          {renderSectionContent(Jsip, jsipData, "Joint Session of Indian Parliament")}
          {renderSectionContent(Press, pressData, "International Press")}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChairPage;
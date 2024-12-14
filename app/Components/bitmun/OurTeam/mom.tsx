import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DelegateAffairs.module.css';

interface PersonData {
  id: number;
  src: string;
  name: string;
  position: string;
}

interface MonDataProps {
  MomData: PersonData[];
}

const TeamCard: React.FC<PersonData> = ({ id, src, name, position }) => {
  return (
    <motion.div 
      key={id} 
      className={styles['alumni-item']}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.2 * (id % 4),
        ease: "easeOut" 
      }}
      viewport={{ 
        once: false,
        amount: 0.2
      }}
    >
      <article className={styles.card}>
        <Image
          className={styles.card__background}
          src={src}
          alt={`${name} - ${position}`}
          width={1200}
          height={1400}
          loading='lazy'
        />
        <motion.div 
          className={styles.card__content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2 * (id % 4) + 0.3 
          }}
          viewport={{ 
            once: false,
            amount: 0.2 
          }}
        >
          <div className={styles["card__content--container"]}>
            <motion.h2 
              className={styles.card__title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.2 * (id % 4) + 0.4 
              }}
              viewport={{ 
                once: false,
                amount: 0.2 
              }}
            >
              {name}
            </motion.h2>
            <motion.div 
              className={styles.card_description}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.2 * (id % 4) + 0.5 
              }}
              viewport={{ 
                once: false,
                amount: 0.2 
              }}
            >
              {position}
            </motion.div>
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

const Mom: React.FC<MonDataProps> = ({ MomData }) => {
  return (
    <motion.div 
      className={styles.teamGrid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.teamCards}>
        {MomData.map((person) => (
          <TeamCard key={person.id} {...person} />
        ))}
      </div>
    </motion.div>
  );
};

export default Mom;
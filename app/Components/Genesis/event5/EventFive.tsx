import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import styles from './eventFive.module.css';
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp } from '@/app/utils/variants';
import { fadeInLeft } from '@/app/utils/variants';
import { fadeInRight } from '@/app/utils/variants';

const EventFive = () => {
    // Animation properties
    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <motion.div
            className={styles.eventContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.eventHeading}>
                Turncoat Debate
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={'/events/turncoat.png'}
                        width={500}
                        height={500}
                        alt='Turncoat Debate'
                    />
                </div>
                <motion.div
                    className={styles.textContainer}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className={styles.Descp}
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        Engage in 'Turncoat : A Dance of Perspectives' with UNESQUO! Experience the thrill of swapping sides in a debate, where your arguments take a whirlwind turn. Step into your opponents' shoes as the debate unfolds, proving that insightful discourse knows no bounds.
                    </motion.div>
                    <motion.div
                        className={styles.Date}
                        variants={fadeInLeft}
                        initial="initial"
                        animate="animate"
                    >
                        10<sup>th</sup> &nbsp;September &nbsp;2023
                    </motion.div>
                    <motion.div 
                        className={styles.Timing}
                        variants={fadeInRight}
                        initial="initial"
                        animate="animate"
                    >
                        01 : 00 PM  -  04 : 00 PM
                    </motion.div>
                    <Link href='https://unstop.com/events/turncoat-debate-genesis23-bit-mesra-ranchi-750786' target='_blank'>
                        <button type="button" className={styles.Button}>Register</button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default EventFive;

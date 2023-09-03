import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import styles from './eventTwo.module.css';
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp } from '@/app/utils/variants';
import { fadeInLeft } from '@/app/utils/variants';
import { fadeInRight } from '@/app/utils/variants';

const EventTwo = () => {
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
                General Quiz
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={'/events/gquiz.png'}
                        width={500}
                        height={600}
                        alt='General Quiz'
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dolorem, magnam at neque maxime quisquam? Architecto, magnam quam! Ipsa, magnam.
                    </motion.div>
                    <motion.div
                        className={styles.Date}
                        variants={fadeInLeft}
                        initial="initial"
                        animate="animate"
                    >
                        9<sup>th</sup> &nbsp;September &nbsp;2023
                    </motion.div>
                    <motion.div 
                        className={styles.Timing}
                        variants={fadeInRight}
                        initial="initial"
                        animate="animate"
                    >
                        09 : 00 AM  -  12 : 00 PM
                    </motion.div>
                    <Link href='https://unstop.com/p/general-quiz-genesis23-bit-mesra-ranchi-749705?lb=uFkljVr' target='_blank'>
                        <button type="button" className={styles.Button}>Register</button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default EventTwo;

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import styles from './eventOne.module.css';
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp } from '@/app/utils/variants';
import { fadeInLeft } from '@/app/utils/variants';
import { fadeInRight } from '@/app/utils/variants';

const EventOne = () => {
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
                Pyramid
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={'/events/pyramid.png'}
                        width={500}
                        height={600}
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dolorem, magnam at neque maxime quisquam? Architecto, magnam quam! Ipsa, magnam.
                    </motion.div>
                    <div className={styles.timeDate}>
                        <motion.div
                            className={styles.Date}
                            variants={fadeInLeft}
                            initial="initial"
                            animate="animate"
                        >
                            8<sup>th</sup> &nbsp;September &nbsp;2023
                        </motion.div>
                        <motion.div
                            className={styles.Timing}
                            variants={fadeInRight}
                            initial="initial"
                            animate="animate"
                        >
                            05 : 30 PM
                        </motion.div>
                    </div>
                    <Link href='https://unstop.com/events/pyramid-genesis23-bit-mesra-ranchi-750774' target='_blank'>
                        <button type="button" className={styles.Button}>Register</button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default EventOne;

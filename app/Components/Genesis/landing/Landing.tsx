import React from 'react';
import { motion } from 'framer-motion';
import styles from './landing.module.css';
import { fadeInUp } from '@/app/utils/variants';

const GenesisLanding = () => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.1,
            },
        },
    };

    return (
        <>
            <motion.div
                className={styles.landingContainer}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
            </motion.div>
            <motion.div
                className={styles.text}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
            >
                <span>Genesis</span>
            </motion.div>

        </>
    );
};

export default GenesisLanding;

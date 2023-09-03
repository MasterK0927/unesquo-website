import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    initial: {
        y: -500,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};
export const fadeInRight: Variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.25,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};
export const fadeInLeft: Variants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.25,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Calendar,
    MapPin,
    Trophy,
    Star,
    Filter,
    ChevronRight
} from 'lucide-react';
import styles from './landing.module.css';

import tba from '../../../../public/logo.png'
import genesisImage from '../../../../public/genesis-logo.png';
import Footer from '../../Footer';

interface Event {
    id: string;
    title: string;
    type: string;
    description: string;
    date: string;
    time: string;
    venue: string;
    teamSize: string;
    prizePool: string;
    registrationLink: string;
    imageUrl: any;
    featured: boolean;
    rating: number;
}

const hardcodedEvents: Event[] = [
    {
        id: '1',
        title: 'Pyramid',
        type: 'Wordplay',
        description: 'In this fun test of wit, one participant is blindfolded while the other must convey a specific idea using only words-without visual cues or key, alluding terms...',
        date: 'Sat, 26th October 2024',
        time: '3:30 PM - 5:30 PM',
        venue: 'Seminar Hall',
        teamSize: '2-3 members',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/CJKwHMtuWkRCTKZQA',
        imageUrl: tba,
        featured: true,
        rating: 4.8
    },
    {
        id: '2',
        title: 'Jam',
        type: 'Wordplay',
        description: 'A lightning-paced challenge where words flow faster than ever before. Participants will dive into a hilarious race of wits with even crazier twists...',
        date: 'Sun, 27th October 2024',
        time: '4:00 PM - 5:00 PM',
        venue: 'Seminar Hall',
        teamSize: '1 member',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/d334hrLZdy8waWkF8',
        imageUrl: tba,
        featured: false,
        rating: 4.5
    },
    {
        id: '3',
        title: 'BizQuiz',
        type: 'Quiz',
        description: 'Join us for BizQuiz, an exciting online business quiz competition organized by UNESQUO...',
        date: 'Sat, 26th October 2024',
        time: '10:00 PM',
        venue: 'Online (Unstop)',
        teamSize: '1 member',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/Xg1mMGQGCm776hSN7',
        imageUrl: tba,
        featured: true,
        rating: 4.7
    },
    {
        id: '4',
        title: 'MELA Quiz',
        type: 'Quiz',
        description: 'Calling all Trivia Titans! Dive deep into a world of questions spanning Music, Entertainment, Literature, and Arts...',
        date: 'Sun, 27th October 2024',
        time: '10:00 PM',
        venue: 'Online (Unstop)',
        teamSize: 'Solo',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/eyq2e3B1rGVR8uh58',
        imageUrl: tba,
        featured: false,
        rating: 4.6
    },
    {
        id: '5',
        title: 'India Quiz',
        type: 'Quiz',
        description: 'Think you know everything about India? Join us for the India Quiz covering India\'s rich history, culture, and current affairs...',
        date: 'Sun, 27th October 2024',
        time: '5:00 PM',
        venue: 'Seminar Hall',
        teamSize: '1-3 members',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/oPooU2Q1qMaWbnsv6',
        imageUrl: tba,
        featured: true,
        rating: 4.8
    },
    {
        id: '6',
        title: 'Eureka',
        type: 'Storytelling',
        description: 'A magical atmosphere to see how much strongly your brains are intertwined as for the same destination...',
        date: 'Sat, 26th October 2024',
        time: '5:30 PM - 8:00 PM',
        venue: 'Seminar Hall',
        teamSize: '1-3 members',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/owR5xE4AJA6H5hPn7',
        imageUrl: tba,
        featured: false,
        rating: 4.5
    },
    {
        id: '7',
        title: 'Genesis Quiz',
        type: 'Quiz',
        description: 'Join us for the ultimate GENESIS Quiz, testing your knowledge on various topics...',
        date: 'Sun, 27th October 2024',
        time: '11:00 AM',
        venue: '233A',
        teamSize: '1-3 members',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/tCiNpNA4kXL8a9wT8',
        imageUrl: tba,
        featured: true,
        rating: 4.8
    },
    {
        id: '8',
        title: 'BPD',
        type: 'Debate',
        description: 'Experience the art of structured argumentation with BPD as teams engage in formal debates...',
        date: 'Mon, 28th October 2024',
        time: '6:30 PM - 7:00 PM',
        venue: 'Seminar Hall',
        teamSize: '2 members (Speaker 1 & 2)',
        prizePool: 'Exciting prizes',
        registrationLink: 'https://forms.gle/Ada77JztnQhVWLj6A',
        imageUrl: tba,
        featured: false,
        rating: 4.6
    }
];


const GenesisEvents: React.FC = () => {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState('All');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filteredEvents = activeFilter === 'All'
        ? hardcodedEvents
        : hardcodedEvents.filter(event => event.type === activeFilter);

    return (
        <div className={styles.container}>
            {/* Navigation */}
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContent}>
                    <div className={styles.navBrand}>
                        <a href="#" className={styles.heroTitleGradient}>Genesis</a>
                    </div>
                    <div className={styles.navLinks}>
                        <a href="/" className={styles.navLink}>Home</a>
                        <a href="https://unesquo.in/bitmun/about/" className={styles.navLink}>About</a>
                        <a href="https://unesquo.in/bitmun/contact/" className={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.div
                className={styles.hero}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className={styles.heroBackground}>
                    <Image
                        src={genesisImage}
                        alt="Hero background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className={styles.heroTitleGradient}>
                            Genesis 2024
                        </span>
                    </motion.h1>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Experience the Ultimate Intellectual Battleground
                    </motion.p>
                    <motion.div
                        className={styles.heroButton}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a href="#events" className={styles.exploreButton}>
                            Explore Events
                            <ChevronRight className={styles.buttonIcon} aria-hidden="true" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div id="events" className={styles.mainContent}>
                {/* Filters */}
                <motion.div
                    className={styles.filters}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Filter size={20} className={styles.filterIcon} />
                    {['All', 'Debate', 'Quiz', 'Wordplay'].map(filter => (
                        <motion.button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`${styles.filterButton} ${activeFilter === filter ? styles.activeFilter : ''}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Events Grid */}
                <motion.div
                    className={styles.eventsGrid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <AnimatePresence>
                        {filteredEvents.map(event => (
                            <motion.div
                                key={event.id}
                                className={styles.eventCard}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.eventImage}>
                                    <Image
                                        src={event.imageUrl}
                                        alt={event.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    {event.featured && (
                                        <span className={styles.featuredBadge}>
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className={styles.eventContent}>
                                    <div className={styles.eventHeader}>
                                        <span className={styles.eventType}>
                                            {event.type}
                                        </span>
                                        <div className={styles.eventRating}>
                                            <Star size={16} />
                                            <span>{event.rating.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <h4 className={styles.eventTitle}>{event.title}</h4>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                    <div className={styles.eventDetails}>
                                        <div className={styles.detailItem}>
                                            <Calendar size={16} />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <MapPin size={16} />
                                            <span>{event.venue}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <Trophy size={16} />
                                            <span>{event.prizePool}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => router.push(event.registrationLink)}
                                        className={styles.registerButton}
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default GenesisEvents;
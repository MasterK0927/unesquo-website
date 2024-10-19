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

// Import local images
import debateImage from '../../../../public/events/lamest.png';
import quizImage from '../../../../public/events/jam.png';
import munImage from '../../../../public/events/lamest.png';
import scienceImage from '../../../../public/events/pyramid.png';
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
        title: 'Parliamentary Debate',
        type: 'Debate',
        description: 'Experience the art of parliamentary debate where teams engage in structured argumentation on contemporary issues.',
        date: 'TBA',
        time: '10:00 AM - 4:00 PM',
        venue: 'Main Auditorium',
        teamSize: '3 members per team',
        prizePool: 'NA',
        registrationLink: '#',
        imageUrl: debateImage,
        featured: true,
        rating: 4.8
    },
    {
        id: '2',
        title: 'Quiz Master Challenge',
        type: 'Quiz',
        description: 'Test your knowledge across multiple domains in this intensive quizzing competition.',
        date: 'TBA',
        time: '11:00 AM - 3:00 PM',
        venue: 'Knowledge Center',
        teamSize: '2 members per team',
        prizePool: 'NA',
        registrationLink: '#',
        imageUrl: quizImage,
        featured: false,
        rating: 4.5
    },
    {
        id: '3',
        title: 'Model United Nations',
        type: 'Debate',
        description: 'Step into the shoes of international diplomats. Debate global issues, draft resolutions, and experience international relations firsthand.',
        date: 'TBA',
        time: '9:00 AM - 5:00 PM',
        venue: 'Conference Hall',
        teamSize: 'Individual Participation',
        prizePool: 'NA',
        registrationLink: '#',
        imageUrl: munImage,
        featured: true,
        rating: 4.7
    },
    {
        id: '4',
        title: 'Science Trivia Night',
        type: 'Quiz',
        description: 'Put your scientific knowledge to the test in this exciting trivia night covering various fields of science.',
        date: 'TBA',
        time: '7:00 PM - 10:00 PM',
        venue: 'Science Center',
        teamSize: '3-4 members per team',
        prizePool: 'NA',
        registrationLink: '#',
        imageUrl: scienceImage,
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
                    {['All', 'Debate', 'Quiz'].map(filter => (
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
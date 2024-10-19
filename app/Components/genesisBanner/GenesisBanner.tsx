import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Brain, Lightbulb, Flame, ExternalLink } from 'lucide-react';
import styles from './GenesisBanner.module.css';

const GenesisBanner = () => {
    const router = useRouter();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Array<{
            x: number;
            y: number;
            speedX: number;
            speedY: number;
            size: number;
        }> = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                    size: Math.random() * 2 + 0.5,
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 8, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap particles around the screen
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 92, 246, ${0.2 + Math.random() * 0.3})`;
                ctx.fill();

                // Connect particles
                particles.forEach((particle2, index2) => {
                    if (index2 <= index) return;
                    const dx = particle.x - particle2.x;
                    const dy = particle.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div className={styles.container}>
            <canvas ref={canvasRef} className={styles.canvas} />

            <motion.div
                className={styles.contentWrapper}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className={styles.leftContent}>
                    <motion.div variants={itemVariants}>
                        <h1 className={styles.title}>
                            GENESIS
                            <span className={styles.year}>2024</span>
                        </h1>
                        <div className={styles.subtitle}>
                            Debate & Quiz Spectacle
                        </div>
                    </motion.div>

                    <motion.p
                        className={styles.description}
                        variants={itemVariants}
                    >
                        Where intellect meets eloquence, and knowledge transforms into power.
                        Join the ultimate battlefield of minds.
                    </motion.p>

                    <motion.button
                        className={styles.ctaButton}
                        onClick={() => router.push('/genesis')}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Event
                        <ExternalLink className={styles.buttonIcon} />
                    </motion.button>
                </div>

                <div className={styles.rightContent}>
                    <motion.div
                        className={styles.iconGrid}
                        variants={containerVariants}
                    >
                        {[
                            { Icon: Brain, text: "Strategic Thinking" },
                            { Icon: Lightbulb, text: "Quick Wit" },
                            { Icon: Flame, text: "Fierce Debates" }
                        ].map(({ Icon, text }) => (
                            <motion.div
                                key={text}
                                className={styles.iconBox}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon className={styles.icon} />
                                </motion.div>
                                <span className={styles.iconLabel}>{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default GenesisBanner;
'use client';

import { useEffect, useState, useRef } from 'react';

const VideoSection = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const currentVideoRef = videoRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        currentVideoRef?.play().catch(error => console.error('Autoplay failed:', error));
                        setIsPlaying(true);
                    } else {
                        currentVideoRef?.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (currentVideoRef) {
            observer.observe(currentVideoRef);
        }

        return () => {
            if (currentVideoRef) {
                observer.unobserve(currentVideoRef);
            }
        };
    }, []);

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTogglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().catch(error => console.error('Play failed:', error));
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent p-[2px] rounded-2xl">
                <div className="w-full h-full bg-card rounded-2xl overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        poster="https://scontent.fccu13-2.fna.fbcdn.net/v/t39.30808-6/306843302_463685125799498_6440379255570587761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JGFG2aQq-50AX8DcNGf&_nc_ht=scontent.fccu13-2.fna&oh=00_AfCv5XXOBU53vGipi1CgjFXy6Tqx3DSKcLDneXAvMPq_qQ&oe=6581FA1B"
                        autoPlay
                        muted={isMuted}
                        playsInline
                        loop
                    >
                        <source src="/bitmun.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>

            {/* Play overlay when paused */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
                    onClick={handleTogglePlay}
                >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleTogglePlay}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={handleToggleMute}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                        )}
                    </button>

                    <span className="text-white/80 text-sm font-medium">BITMUN 2024 Highlights</span>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;

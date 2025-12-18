'use client';

const WavyBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated gradient blobs */}
            <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute top-1/4 right-0 w-[40vw] h-[40vh] bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/4 w-[45vw] h-[45vh] bg-accent/10 rounded-full blur-[110px] animate-blob animation-delay-4000" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Radial gradient from center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />

            {/* Animated waves SVG */}
            <svg
                className="absolute bottom-0 w-full h-[40vh] opacity-20"
                viewBox="0 0 1440 400"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                    </linearGradient>
                </defs>

                {/* Wave 1 */}
                <path
                    fill="url(#waveGradient1)"
                    d="M0 300 Q 360 200, 720 300 T 1440 300 V 400 H 0 Z"
                >
                    <animate
                        attributeName="d"
                        dur="12s"
                        repeatCount="indefinite"
                        values="
              M0 300 Q 360 200, 720 300 T 1440 300 V 400 H 0 Z;
              M0 300 Q 360 350, 720 250 T 1440 300 V 400 H 0 Z;
              M0 300 Q 360 200, 720 300 T 1440 300 V 400 H 0 Z
            "
                    />
                </path>

                {/* Wave 2 */}
                <path
                    fill="url(#waveGradient2)"
                    d="M0 350 Q 400 280, 800 350 T 1440 350 V 400 H 0 Z"
                >
                    <animate
                        attributeName="d"
                        dur="10s"
                        repeatCount="indefinite"
                        values="
              M0 350 Q 400 280, 800 350 T 1440 350 V 400 H 0 Z;
              M0 350 Q 400 380, 800 320 T 1440 350 V 400 H 0 Z;
              M0 350 Q 400 280, 800 350 T 1440 350 V 400 H 0 Z
            "
                    />
                </path>
            </svg>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default WavyBackground;

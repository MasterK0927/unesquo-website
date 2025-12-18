import React from 'react';

interface SecretariatCardProps {
    name: string;
    role: string;
    image?: string;
    bio?: string;
}

const SecretariatCard = ({ name, role, image, bio }: SecretariatCardProps) => {
    return (
        <div className="group relative">
            {/* Card Container */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Floating gradient orb */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-top-5" />

                {/* Avatar Container */}
                <div className="relative mx-auto mb-6">
                    <div className="relative w-28 h-28 mx-auto">
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '8s' }}>
                            <div className="w-full h-full rounded-full bg-card" />
                        </div>

                        {/* Static gradient border */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 p-[2px]">
                            <div className="w-full h-full rounded-full bg-card overflow-hidden">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-secondary/20">
                                        <span className="text-4xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                                            {name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="text-center relative z-10">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/80 group-hover:bg-clip-text transition-all">
                        {name}
                    </h3>
                    <p className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                        {role}
                    </p>
                    {bio && (
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">
                            {bio}
                        </p>
                    )}
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
};

export default SecretariatCard;

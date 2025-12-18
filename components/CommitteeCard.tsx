import React from 'react';

interface CommitteeCardProps {
    name: string;
    abbreviation: string;
    description: string;
    agenda?: string;
    difficulty?: string;
}

const CommitteeCard = ({
    name,
    abbreviation,
    description,
    agenda,
    difficulty,
}: CommitteeCardProps) => {
    const difficultyColor = {
        'Advanced': 'from-red-500 to-orange-500',
        'Intermediate': 'from-yellow-500 to-amber-500',
        'Beginner-Friendly': 'from-green-500 to-emerald-500',
        'All Levels': 'from-blue-500 to-cyan-500',
    }[difficulty || 'All Levels'] || 'from-primary to-secondary';

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card border border-border/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
            {/* Animated gradient border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-sm" />
            </div>

            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                        <span className={`inline-block text-sm font-bold text-white bg-gradient-to-r ${difficultyColor} px-4 py-1.5 rounded-full shadow-lg`}>
                            {abbreviation}
                        </span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${difficultyColor} rounded-full blur-md opacity-50`} />
                    </div>
                    {difficulty && (
                        <span className="text-xs text-muted-foreground/80 bg-muted/50 px-3 py-1 rounded-full">
                            {difficulty}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {name}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                    {description}
                </p>

                {agenda && (
                    <div className="pt-5 border-t border-border/50">
                        <div className="flex items-start gap-3">
                            <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />
                            <div>
                                <span className="text-xs uppercase tracking-wider text-primary font-semibold">Agenda</span>
                                <p className="text-sm text-muted-foreground mt-1">{agenda}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
            </div>
        </div>
    );
};

export default CommitteeCard;

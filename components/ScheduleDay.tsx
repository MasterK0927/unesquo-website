import React from 'react';

interface Event {
    time: string;
    title: string;
    description?: string;
}

interface ScheduleDayProps {
    day: string;
    date: string;
    events: Event[];
}

const ScheduleDay = ({ day, date, events }: ScheduleDayProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
            {/* Header with gradient */}
            <div className="relative p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border/50">
                {/* Decorative line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {day}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {date}
                </p>
            </div>

            {/* Events */}
            <div className="p-6 space-y-0">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="relative flex gap-4 py-4 group/event"
                    >
                        {/* Timeline line */}
                        {index !== events.length - 1 && (
                            <div className="absolute left-[3.25rem] top-10 w-px h-[calc(100%-1rem)] bg-gradient-to-b from-border to-transparent" />
                        )}

                        {/* Time badge */}
                        <div className="relative z-10 flex-shrink-0 w-[4.5rem]">
                            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg px-2 py-1.5 text-center border border-border/50 group-hover/event:border-primary/30 transition-colors">
                                <span className="text-xs font-mono font-semibold text-foreground">
                                    {event.time}
                                </span>
                            </div>
                        </div>

                        {/* Event content */}
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground group-hover/event:text-primary transition-colors">
                                {event.title}
                            </h4>
                            {event.description && (
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                    {event.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        </div>
    );
};

export default ScheduleDay;

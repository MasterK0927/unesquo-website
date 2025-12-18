import React from 'react';

interface GridWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const GridWrapper = ({ children, className = '' }: GridWrapperProps) => {
    return (
        <div className={`article-wrapper-full ${className}`}>
            {children}
        </div>
    );
};

interface GridContentProps {
    children: React.ReactNode;
    className?: string;
}

export const GridContent = ({ children, className = '' }: GridContentProps) => {
    return (
        <div className={`article-section-content ${className}`}>
            {children}
        </div>
    );
};

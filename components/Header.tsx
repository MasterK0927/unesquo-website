'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Committees', href: '#committees' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'Register', href: '#register' },
    ];

    return (
        <header className="article-header-grid sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
            <div className="article-hero flex items-center justify-between py-4">
                {/* Logo with gradient */}
                <Link href="/bitmun" className="group relative">
                    <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        BITMUN
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <span className="relative z-10">{item.label}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                    <div className="ml-4">
                        <Button>Register Now</Button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                        <span className={`absolute left-0 top-2 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`article-hero md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 py-4 border-t border-border/50' : 'max-h-0'}`}>
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-2">
                        <Button className="w-full">Register Now</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

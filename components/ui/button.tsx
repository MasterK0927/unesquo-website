import * as React from 'react';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
        const baseStyles =
            'group relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden';

        const variantStyles = {
            default: `
        bg-gradient-to-r from-primary to-primary/90 text-primary-foreground 
        hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary before:to-accent 
        before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
        rounded-xl
      `,
            outline: `
        border-2 border-border bg-transparent text-foreground 
        hover:border-primary hover:bg-primary/5 hover:text-primary
        rounded-xl
      `,
            ghost: `
        hover:bg-primary/10 text-foreground hover:text-primary
        rounded-xl
      `,
        };

        const sizeStyles = {
            default: 'h-11 px-6 py-2 text-sm',
            sm: 'h-9 px-4 text-sm',
            lg: 'h-14 px-10 text-base',
        };

        return (
            <button
                className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
                ref={ref}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{props.children}</span>

                {/* Shimmer effect on hover for default variant */}
                {variant === 'default' && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

const button = cva('transition-all duration-300 w-fit', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      sm: ['text-sm', 'h-8', 'px-2'],
      md: ['text-base', 'h-10', 'px-4'],
      xl: ['text-base', 'h-12', 'px-6'],
      xxl: ['text-base', 'h-14', 'px-8'],
    },
    radius: {
      sm: ['rounded-sm'],
      md: ['rounded-md'],
      xl: ['rounded-xl'],
      xxl: ['rounded-2xl'],
      full: ['rounded-full'],
    },
    buttonType: {
      button: '',
      icon: ['w-11', 'h-11', 'rounded-full', 'flex-center', 'p-0'],
    },
  },
  compoundVariants: [
    { variant: 'default', size: 'md', class: 'uppercase w-fit' },
    { buttonType: 'icon', size: 'md', class: 'h-11 w-11' },
    { buttonType: 'icon', variant: 'secondary', class: '' },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    buttonType: 'button',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, buttonType, radius, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(button({ variant, size, buttonType, radius }), className)}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };

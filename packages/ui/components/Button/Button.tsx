import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

const button = cva('transition-all duration-300 w-fit', {
  variants: {
    varient: {
      primary: [
        'bg-white',
        'border-2',
        'hover:bg-[#171614]',
        'hover:text-white',
      ],
      secondary: [
        'bg-black',
        'text-white',
        'border-2',
        'border-black',
        'hover:bg-white',
        'hover:text-black',
      ],
      accent: [
        'bg-blue-500',
        'text-white',
        'border-2',
        'border-blue-500',
        'hover:bg-blue-900',
      ],
      outlined: [
        'bg-white',
        'border-2',
        'border-black',
        'hover:bg-black',
        'hover:text-white',
      ],
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
    { varient: 'primary', size: 'md', class: 'uppercase w-fit' },
    { buttonType: 'icon', size: 'md', class: 'h-11 w-11' },
    { buttonType: 'icon', varient: 'accent', class: 'bg-blue-700' },
  ],
  defaultVariants: {
    varient: 'primary',
    size: 'md',
    buttonType: 'button',
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, varient, size, buttonType, radius, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(button({ varient, size, buttonType, className, radius }))}
      {...props}
    />
  )
);

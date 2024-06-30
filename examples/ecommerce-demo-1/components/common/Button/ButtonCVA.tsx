import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva('button', {
  variants: {
    varient: {
      primary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
      ],
      outlined: ['bg-white', 'border-2', 'border-black', 'hover:invert'],
    },
    size: {
      sm: ['text-sm', 'py-1', 'px-2'],
      md: ['text-base', 'py-2', 'px-4'],
    },
    buttonType: {
      button: '',
      icon: ['w-11 h-11 rounded-full flex-center p-0'],
    },
  },
  compoundVariants: [
    { varient: 'primary', size: 'md', class: 'uppercase w-fit' },
    { buttonType: 'icon', size: 'md', class: 'h-11 w-11' },
  ],
  defaultVariants: {
    varient: 'primary',
    size: 'md',
    buttonType: 'button',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  varient,
  size,
  buttonType,
  ...props
}) => (
  <button
    className={twMerge(button({ varient, size, buttonType, className }))}
    {...props}
  />
);

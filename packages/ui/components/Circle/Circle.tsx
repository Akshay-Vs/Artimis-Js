import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps, forwardRef } from 'react';

const circle = cva('rounded-full', {
  variants: {
    size: {
      sm: ['h-4 w-4'],
      md: ['h-6 w-6'],
      lg: ['h-8 w-8'],
      xl: ['h-10 w-10'],
      '2xl': ['h-12 w-12'],
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type CircleProps = HTMLProps<HTMLDivElement> &
  VariantProps<typeof circle> & {
    color: string;
  };

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ color, size, className, ref, ...rest }: CircleProps) => {
    return (
      <div
        className={cn(size, className)}
        style={{ backgroundColor: color }}
        ref={ref}
        {...rest}
      />
    );
  }
);

export { Circle };

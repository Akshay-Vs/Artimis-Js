import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import cn from '@/utils/cn';

type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'
  | 'banner';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  children: ReactNode;
}

const sizeClasses: Record<Size, string> = {
  xs: 'text-xs leading-tight',
  sm: 'text-sm leading-snug',
  md: 'text-base leading-normal',
  lg: 'text-lg leading-relaxed',
  '1x': 'text-xl leading-6',
  '2x': 'text-2xl leading-7',
  '3x': 'text-3xl leading-8',
  '4x': 'text-4xl leading-9',
  '5x': 'text-5xl leading-10',
  '6x': 'text-6xl leading-tight',
  '7x': 'text-7xl leading-tight',
  '8x': 'text-8xl leading-tight',
  '9x': 'text-9xl leading-tight',
  '10x': 'text-[108px] leading-[1.0741]',
  banner: 'text-[308px] leading-[1.2059]',
};

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ size = 'md', children, className, ...rest }, ref) => {
    const sizeClass = sizeClasses[size];

    return (
      <div ref={ref} className={cn(sizeClass, className)} {...rest}>
        {children}
      </div>
    );
  }
);

Text.displayName = 'Text';

export { Text };
export type { TextProps };

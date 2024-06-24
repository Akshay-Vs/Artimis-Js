import React from 'react';
type TextProps = {
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
    | 'banner';
  children: React.ReactNode;
  className?: string;
};

const sizes = {
  xs: {
    fontSize: 12,
    lineHeight: 20 / 12,
  },
  sm: {
    fontSize: 14,
    lineHeight: 22 / 14,
  },
  md: {
    fontSize: 16,
    lineHeight: 24 / 16,
  },
  lg: {
    fontSize: 18,
    lineHeight: 28 / 20,
  },
  xl: {
    fontSize: 20,
    lineHeight: 32 / 24,
  },
  xxl: {
    fontSize: 26,
    lineHeight: 30 / 30,
  },
  xxxl: {
    fontSize: 30,
    lineHeight: 46 / 38,
  },
  huge: {
    fontSize: 40,
    lineHeight: 54 / 46,
  },
  xhuge: {
    fontSize: 56,
    lineHeight: 64 / 56,
  },
  xxhuge: {
    fontSize: 68,
    lineHeight: 76 / 68,
  },
  banner: {
    fontSize: 308,
    lineHeight: 82 / 68,
  },
};

const Text = ({ size = 'md', children, className }: TextProps) => {
  const fontStyle = sizes[size];

  return (
    <div
      className={`text-[${size}] ${className}`}
      style={{
        fontSize: `${fontStyle.fontSize}px`,
        lineHeight: `${fontStyle.lineHeight}`,
      }}
    >
      {children}
    </div>
  );
};

export { Text };
export type { TextProps };

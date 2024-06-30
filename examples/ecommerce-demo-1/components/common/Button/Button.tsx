import React, { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
  type?: 'normal' | 'icon';
  fill?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  fill,
  disabled,
  onClick,
  className,
  type = 'normal',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 p-3 px-6 h-12 bg-white rounded-full flex-center
        text-[#171614] hover:bg-[#171614] hover:text-white 
        transition-all duration-300 
        ${type === 'icon' && 'p-3 w-14'} 
        ${fill && 'bg-[#171614] text-white'}
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

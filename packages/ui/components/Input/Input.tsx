import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@/utils/cn';
import { Button } from '../Button/Button';

const input = cva(
  'border-[1px] p-3 px-[5px] pl-5 h-12 rounded-full flex-center-between transition-all duration-300 gap-4 font-[500]',
  {
    variants: {
      varient: {
        primary: ['text-[#595959]', 'bg-[#fafafa]', 'border-[#e5e7eb]'],
        secondary: ['text-[#000]', 'bg-[#fff]', 'border-[#000]'],
        accent: ['text-white', 'bg-blue-500', 'border-blue-500'],
      },
      size: {
        sm: ['text-sm', 'h-8'],
        md: ['text-base', 'h-10'],
        xl: ['text-base', 'h-12'],
        xxl: ['text-base', 'h-14'],
      },
      radius: {
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        xl: ['rounded-xl'],
        xxl: ['rounded-2xl'],
        full: ['rounded-full'],
      },
    },
    defaultVariants: {
      varient: 'primary',
      size: 'xxl',
      radius: 'full',
    },
  }
);

type InputHTMLAttributesWithIcon = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    icon?: IconProp;
  };

const Input = ({
  icon,
  varient,
  size,
  radius,
  ...rest
}: InputHTMLAttributesWithIcon) => {
  return (
    <div className={cn(input({ varient, size, radius }))}>
      <input
        {...rest}
        className="border-none outline-none bg-transparent w-[80%]"
      />
      {icon && (
        <Button varient={varient} size={size} buttonType="icon">
          <FontAwesomeIcon icon={icon} />
        </Button>
      )}
    </div>
  );
};

export default Input;
